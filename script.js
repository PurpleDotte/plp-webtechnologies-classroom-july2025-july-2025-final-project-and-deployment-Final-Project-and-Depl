// Function to handle page switching
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });

    const activeLink = document.getElementById(pageId + 'Link');
    if (activeLink) {
        activeLink.classList.add('active'); // Add active class to the current link
    }
}

// Function for slider navigation
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider .slides img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

// Validate form before submission
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Sign-up successful!");
    return true;
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    moveSlide(0);  // Display the first slide initially
});

// Auto-slide every 1 second
setInterval(() => {
    moveSlide(1);
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    // Menu items and their corresponding image paths
    const menuItems = [
        { name: 'Quarter Chicken & Pap - R65.00', image: 'images/quarter_chicken.jpeg'},
        { name: 'Steak & Pap - R70.00', image: 'images/steak_pap.jpeg'},
        { name: 'Chicken Curry & Rice - R65.00', image: 'images/chicken_curry_rice.jpeg'},
        { name: 'Amagwinya (Fat Cakes) & Mince - R30.00', image: 'images/amagwinya_mince.jpeg' },
        { name: 'Beef Stew & Rice - R70.00', image: 'images/beef_stew_rice.jpeg' }
    ];

    // Get the menu <ul> element
    const menuList = document.querySelector('#menu ul');

    // Iterate through each menu item and add an image alongside the text
    menuItems.forEach(item => {
        const listItem = document.createElement('li');  // Create a new <li> for each menu item
        const image = document.createElement('img');    // Create an <img> element for the thumbnail
        const text = document.createTextNode(item.name);  // Create a text node for the item name

        // Set the image source and styling
        image.src = item.image;
        image.alt = item.name;  // Set the alt text for accessibility
        image.style.marginRight = '10px'; // Space between image and text

        // Append the image and text to the list item
        listItem.appendChild(image);
        listItem.appendChild(text);

        // Append the list item to the menu
        menuList.appendChild(listItem);
    });
});

// Function to create and display the modal with the content
function showModal(contentType) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function () {
        modal.style.display = 'none'; // Close the modal
    };
    
    const content = document.createElement('div');
    content.classList.add('modal-body');

    if (contentType === 'terms') {
        content.innerHTML = `
            <h2>Terms of Use</h2>
            <br>
            <h3>1. Acceptance of Terms</h3>
            <br>
            <p>By accessing or using the Mnadi TakeAways website ("Website"), you agree to be bound by these Terms of Use, our [Privacy Policy], and all applicable laws of South Africa. If you do not agree with these terms, please do not use our Website or services.</p>
            <br>
            <h3>2. About Us</h3>
            <br>
            <p>Mnadi TakeAways is a South African-based business offering food and beverage products for sale through our e-commerce platform. We are committed to providing high-quality, locally-prepared meals with convenient ordering and delivery options.</p>
            <br>
            <h3>3. Eligibility & Account Registration</h3>
            <br>
            <p>To place orders, users must create an account using accurate and complete information. You are responsible for safeguarding your login credentials and for all activities under your account. We reserve the right to suspend or terminate accounts suspected of misuse or fraud.</p>
            <br>
            <h3>4. Ordering & Payments</h3>
            <br>
            <p>All orders are subject to availability and confirmation. Prices are listed in South African Rand (ZAR) and include applicable VAT unless stated otherwise. Payment must be made at checkout using approved payment gateways. Orders are not considered confirmed until payment has been successfully processed.</p>
            <br>
            <h3>5. Delivery & Returns</h3>
            <br>
            <p>Delivery is only available within specified areas in South Africa. Estimated delivery times are provided for guidance and may vary. We do not accept returns for food items unless the product is incorrect, expired, or otherwise defective upon receipt. Please report any issues within 24 hours of delivery.</p>
            <br>
            <h3>6. User Conduct</h3>
            <br>
            <p>You agree not to:</p>
            <ul>
                <li>Use the Website for any unlawful or harmful purpose.</li>
                <li>Interfere with the operation or security of the Website.</li>
                <li>Post or transmit misleading, defamatory, or harmful content.</li>
                <li>We reserve the right to terminate your access if you violate these terms.</li   >
            </ul>
            <br>
            <h3>7. Intellectual Property</h3>
            <br>
            <p>All content on the Website—including logos, images, menus, and product descriptions—is the property of Mnadi TakeAways or its licensors and is protected under South African copyright and trademark laws. You may not reproduce or distribute our content without permission.</p>
            <br>
            <h3>8. Privacy</h3>
            <br>
            <p>We collect and process personal data (e.g., name, contact details, payment information) in compliance with the Protection of Personal Information Act (POPIA). For details, please review our <a href="privacy.html">Privacy Policy</a>.</p>
            <br>
            <h3>9. Limitation of Liability</h3>
            <br>
            <p>Mnadi TakeAways is not liable for:</p>
            <ul>
                <li>Any indirect, incidental, or consequential loss or damage;</li>
                <li>Delays or failures in delivery due to circumstances beyond our control (e.g., weather, third-party services);</li>
                <li>Inaccuracies in information supplied by users.</li>
                <li>Use of this Website is at your own risk.</li>
            </ul>
            <br>
            <h3>10. Amendments to Terms</h3>
            <br>
            <p>We reserve the right to update these Terms of Use at any time. Any changes will be posted on this page with a revised effective date. Continued use of the Website after changes constitutes acceptance of the updated terms.</p>
            <br>
            <h3>11. Governing Law</h3>
            <br>
            <p>These Terms of Use are governed by the laws of the Republic of South Africa, and any disputes shall be resolved in the appropriate courts of South Africa.</p>
            <br>
            <h3>12. Contact Us</h3>
            <br>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>support@mnadi.co.za</p>
            <p>0112345678</p>            
        `;
    } else if (contentType === 'privacy') {
        content.innerHTML = `
            <h2>Privacy Policy</h2>
            <br>
            <p>Mnadi TakeAways (“we”, “our”, or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and disclose your personal data in accordance with the Protection of Personal Information Act, 2013 (POPIA).</p>
            <br>
            <h3>1. What Information We Collect</h3>
            <br>    
            <p>When you use our Website, we may collect the following types of personal information:</p>
            <ul>
                <li>Identification data: Full name, email address, phone number.</li>
                <li>Order details: Delivery address, order history, food preferences.</li>
                <li>Payment information: Processed securely via third-party payment gateways (we do not store your card details).</li>
                <li>Device data: IP address, browser type, device used, and browsing behavior.</li>
            </ul>
            <br>
            <h3>2. How We Use Your Information</h3> 
            <br>
            <p>We collect and use your personal information to:</p>
            <ul>
                <li>Process and deliver your orders.</li>
                <li>Communicate with you about your order or customer service queries.</li>
                <li>Personalize your user experience and recommend products.</li>
                <li>Improve our services, security, and platform functionality.</li>
                <li>Send marketing emails (only with your consent).</li>
            </ul>
            <br>
            <h3>3. Legal Grounds for Processing</h3>
            <br>
            <p>We only process your personal information when:</p>
            <ul>
                <li>You have given explicit consent;</li>
                <li>It is necessary to perform a contract (e.g., fulfill an order);</li>
                <li>It is required by law;</li>
                <li>It is in our legitimate interest to improve services (while protecting your rights).</li>
            </ul>
            <br>
            <h3>4. How We Store and Protect Your Information</h3>
            <br>
            <p>Your information is stored on secure servers hosted in South Africa or with third-party providers who comply with data protection standards.</p>
            <p>We implement appropriate technical and organizational security measures to protect your personal data against loss, misuse, or unauthorized access.</p>
            <br>
            <h3>5. Sharing Your Information</h3>
            <br>
            <p>We may share your personal data with:</p>
            <ul>
                <li>Trusted third parties: e.g., delivery providers, payment gateways, IT service providers.</li>
                <li>Regulatory bodies or law enforcement: when required by law.</li>
            </ul>
            <p>We do not sell your personal information.</p>
            <br>
            <h3>6. Your Rights Under POPIA</h3>
            <br>
            <p>You have the right to:</p>
            <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Withdraw consent to processing (where applicable).</li>
                <li>Lodge a complaint with the Information Regulator (South Africa).</li>
            </ul>
            <br>
            <p>Contact the Information Regulator:</p>
            <ul>
                <li>Email: complaints.IR@justice.gov.za</li>
                <li>Website: https://www.justice.gov.za/inforeg/</li>
            </ul>
            <br>
            <h3>7. Cookies & Tracking</h3>
            <br>
            <p>Our Website uses cookies to improve your browsing experience and analyze site usage. You can manage cookie preferences in your browser settings.</p>
            <br>
            <h3>8. Marketing Communications</h3>
            <br>
            <p>With your consent, we may send you promotions or product updates via email or SMS. You can unsubscribe at any time by clicking the "unsubscribe" link or replying “STOP”.</p>
            <br>
            <h3>9. Retention Period</h3>
            <br>
            <p>We retain your data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes.</p>
            <br>
            <h3>10. Changes to This Policy</h3>
            <br>
            <p>We may update this Privacy Policy periodically. When we do, we will revise the "Effective Date" and, where appropriate, notify you.</p>
            <br>
            <h3>11. Contact Us</h3>
            <br>
            <p>If you have questions about this policy or want to exercise your data rights, contact us:</p>
            <p>support@mnadi.co.za</p>
            <p>0112345678</p>            
        `;
    }

    modalContent.appendChild(closeButton);
    modalContent.appendChild(content);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = 'block'; // Show the modal
}

// Attach events to the links for displaying modals
document.querySelector('#checkbox + a').addEventListener('click', function (event) {
    event.preventDefault();
    showModal('terms');
});

document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        showModal('privacy');
    });
});
