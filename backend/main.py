from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic
import os
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request model
class PORequest(BaseModel):
    supplier_name: str
    po_number: str
    expected_date: str
    current_date: str

@app.get("/")
def read_root():
    return {"message": "SupplierGPT API is running!"}

@app.post("/generate-email")
async def generate_email(request: PORequest):
    try:
        # Initialize Claude client
        client = anthropic.Anthropic(
            api_key=os.getenv("ANTHROPIC_API_KEY")
        )
        
        # Create the prompt
        prompt = f"""You are a professional procurement specialist writing follow-up emails to suppliers.

Context:
- Supplier: {request.supplier_name}
- PO Number: {request.po_number}
- Expected delivery date: {request.expected_date}
- Current date: {request.current_date}

Generate 3 email variations with different tones:

1. FORMAL - For difficult suppliers or when escalation is needed
2. POLITE - For regular business relationships
3. URGENT - For critical time-sensitive situations

For each email, provide:
- A subject line
- The email body (3-4 sentences)
- When to use this tone (1-2 sentences)

Format your response as valid JSON:
{{
  "formal": {{
    "subject": "...",
    "body": "...",
    "when_to_use": "..."
  }},
  "polite": {{
    "subject": "...",
    "body": "...",
    "when_to_use": "..."
  }},
  "urgent": {{
    "subject": "...",
    "body": "...",
    "when_to_use": "..."
  }}
}}

Only return the JSON, nothing else."""

        # Call Claude API
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1500,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        
        # Extract the response
        response_text = message.content[0].text
        
        # Parse JSON from response
        # Try to find JSON in the response (in case Claude adds extra text)
        start_idx = response_text.find('{')
        end_idx = response_text.rfind('}') + 1
        json_str = response_text[start_idx:end_idx]
        
        emails = json.loads(json_str)
        
        return {
            "success": True,
            "emails": emails
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)