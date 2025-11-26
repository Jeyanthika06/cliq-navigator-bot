// Simple "fake detection" of org/network/dev space.
// You can change these strings to match your real setup.
const fakeContext = {
  organization: "Zoho / College Lab",
  network: "Office / Lab Wi-Fi",
  devSpace: "Cliq • SkillFlow workspace",
};

// Replies for each button, written like a human student explanation.
const replies = {
  whereAmI: `
    <p><strong>Here’s how to think about your current setup:</strong></p>
    <ol>
      <li><strong>Organization</strong> is the main place you belong to – for example, your college, lab, or company.</li>
      <li><strong>Network</strong> is the Wi-Fi or LAN you are actually connected to (hostel Wi-Fi, college Wi-Fi, mobile hotspot, etc.).</li>
      <li><strong>Developer Space</strong> is the tool where you build or test your app – here it is the Cliq developer console / SkillFlow workspace.</li>
    </ol>
    <p>If any one of these is wrong, the extension may behave in a strange way. So first confirm all three are correct.</p>
  `,
  fixDevSpace: `
    <p><strong>Steps to fix your Developer Space / Cliq app:</strong></p>
    <ol>
      <li>Open your <strong>Cliq Developer Console</strong>.</li>
      <li>Check that the <strong>extension ID</strong> and <strong>widget URL</strong> are pointing to your latest code.</li>
      <li>After any code change, click <strong>Reload / Update</strong> in the console.</li>
      <li>Open Cliq → go to the app / widget section and test again.</li>
      <li>If it still fails, open browser DevTools (F12), check the <strong>Console</strong> tab for errors, and fix them one by one.</li>
    </ol>
  `,
  switchNetwork: `
    <p><strong>General safe steps to switch networks:</strong></p>
    <ol>
      <li>Save your work in all tabs (VS Code, browser, etc.).</li>
      <li>Disconnect from the current Wi-Fi / hotspot.</li>
      <li>Connect to the <strong>target network</strong> (for example, office Wi-Fi or home Wi-Fi).</li>
      <li>Open a new tab and visit any simple site (like example.com) to confirm Internet is working.</li>
      <li>If your extension or widget uses a local URL (like <code>http://localhost:8000</code>), start your local server again and refresh Cliq.</li>
    </ol>
  `,
};

function updateContextUI() {
  const loadingEl = document.getElementById("status-loading");
  const orgEl = document.getElementById("org-value");
  const netEl = document.getElementById("network-value");
  const devEl = document.getElementById("devspace-value");

  if (loadingEl) loadingEl.style.display = "none";
  if (orgEl) orgEl.textContent = fakeContext.organization;
  if (netEl) netEl.textContent = fakeContext.network;
  if (devEl) devEl.textContent = fakeContext.devSpace;
}

function showReply(typeKey) {
  const emptyEl = document.getElementById("reply-empty");
  const replyEl = document.getElementById("reply-content");
  if (!replyEl) return;

  if (emptyEl) emptyEl.style.display = "none";

  replyEl.innerHTML = replies[typeKey] || "<p>Sorry, no reply prepared for that yet.</p>";
}

document.addEventListener("DOMContentLoaded", () => {
  // Fill the context section
  updateContextUI();

  // Wire up the buttons
  const btnWhere = document.getElementById("btn-where");
  const btnFixDev = document.getElementById("btn-fix-devspace");
  const btnSwitch = document.getElementById("btn-switch");

  if (btnWhere) {
    btnWhere.addEventListener("click", () => showReply("whereAmI"));
  }

  if (btnFixDev) {
    btnFixDev.addEventListener("click", () => showReply("fixDevSpace"));
  }

  if (btnSwitch) {
    btnSwitch.addEventListener("click", () => showReply("switchNetwork"));
  }
});
