# Network Guide Widget (Student) — README


## Project summary
Network Guide Widget helps students and new users understand Zoho Cliq networks, organizations and why Developer Space may not appear. It provides quick commands and an interactive sidebar panel.


## Files included
- `manifest.json` — extension manifest
- `index.html` — widget entry page
- `styles.css` — widget styles
- `widget.js` — widget logic (replace webhook URL)
- `icon.png` — icon to display
- `screenshots/Screenshot (49).png` — demo screenshot


## How to install (quick)
1. Create your bot and note the **Incoming Webhook Endpoint** from: Integrations → Bots → (your bot) → Incoming Webhook Endpoint
2. Edit `widget.js` and replace `INCOMING_WEBHOOK_URL` with your bot webhook URL.
3. Zip the folder contents into `network-guide-widget.zip`.
4. In Cliq Developer Space → Widgets → Create Widget, upload the zip or provide the hosted URL.
5. Install the widget in your organization and open the right-side panel to test.


## Commands to test in chat
- `/whereami` — shows organization & network
- `/fixdeveloper` — steps to fix developer space
- `/switchnetwork` — instructions to change workspace
- `/cliqhelp` — general help menu


## Notes and troubleshooting
- If the widget shows a bot call error, it could be CORS. Use a small server or a Zoho Function to forward requests and return JSON.
- For production don't expose webhook keys in client JS. Use a server.


## Demo screenshot
Included: `/mnt/data/Screenshot (49).png`


## About
Student project by Jeyanthika Devi S. This submission is made for Cliqtrix and is built by the student for learning and competition.
