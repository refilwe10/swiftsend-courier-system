
/* ========================================
   SwiftSend Couriers - Main JavaScript
   ======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    console.log('SwiftSend website loaded successfully!');
});

// ---------- Customer Functions ----------
function registerCustomer() {
    const name = document.getElementById('reg-name');
    const email = document.getElementById('reg-email');
    const phone = document.getElementById('reg-phone');
    const address = document.getElementById('reg-address');
    const password = document.getElementById('reg-password');

    if (!name || !email || !phone || !address || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!name.value.trim()) {
        alert('Please enter your full name.');
        name.focus();
        return;
    }

    alert('Account created successfully!\nWelcome, ' + name.value + '.\nYou can now log in.');
    window.location.href = 'login.html';
}

function loginCustomer() {
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    if (!email || !password) {
        alert('Please enter your email and password.');
        return;
    }

    alert('Login successful! Welcome back.');
    window.location.href = 'dashboard.html';
}

function submitBooking() {
    const pickup = document.getElementById('pickup');
    const delivery = document.getElementById('delivery');
    const desc = document.getElementById('parcel-desc');

    if (!pickup || !delivery || !desc) {
        alert('Please fill in all required fields.');
        return;
    }

    const tracking = 'SS-' + Math.floor(100000 + Math.random() * 900000);
    alert('Booking confirmed!\n\nTracking Number: ' + tracking + '\n\nYou will receive a notification once a driver is assigned.');
    window.location.href = 'dashboard.html';
}

function trackParcel() {
    const input = document.getElementById('track-input');
    const result = document.getElementById('track-result');

    if (!input || !input.value.trim()) {
        alert('Please enter a tracking number.');
        return;
    }

    if (result) {
        result.style.display = 'block';
        result.innerHTML = `
            <h3>Tracking: ${input.value}</h3>
            <p class="mb-2"><strong>Status:</strong> <span class="status status-transit">In Transit</span></p>
            <p><strong>Current Location:</strong> Johannesburg CBD Depot</p>
            <p><strong>Estimated Delivery:</strong> Today by 18:00</p>
            <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px solid #e2e8f0;">
                <p style="font-size:0.9rem;"><strong>Timeline</strong></p>
                <p style="font-size:0.85rem; color:#64748b;">• 09:15 – Picked up from Sandton</p>
                <p style="font-size:0.85rem; color:#64748b;">• 11:40 – Arrived at central depot</p>
                <p style="font-size:0.85rem; color:#64748b;">• 13:20 – Out for delivery</p>
            </div>
        `;
    }
}

// ---------- Driver Functions ----------
function updateDriverStatus(tracking, status) {
    alert('Status updated!\n\n' + tracking + ' → ' + status + '\n\nCustomer has been notified via SMS/Email.');
}

// ---------- Admin Functions ----------
function assignDelivery() {
    alert('Delivery assigned successfully!');
}

function generateReport() {
    alert('Report generated successfully!');
}

function exportPDF() {
    alert('PDF exported successfully!');
}