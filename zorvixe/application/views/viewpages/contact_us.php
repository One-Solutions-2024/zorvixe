<style>
.error {
    color: red;
    font-size: 14px;
}
</style>

<!-- Contact Section -->
<section id="contact" class="contact section hero">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a project in mind? Let's connect and bring it to life. We're here to answer your questions and get
            started.
        </p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 mb-5">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div class="info-card">
                    <div class="icon-box">
                        <i class="bi bi-geo-alt"></i>
                    </div>
                    <h3>Our Address</h3>
                    <p>Banglore 1st Stage BTM Layout Water Tank</p>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="info-card">
                    <div class="icon-box">
                        <i class="bi bi-telephone"></i>
                    </div>
                    <h3>Contact Number</h3>
                    <p>Mobile: +91 8328590444<br>
                        Email: info@zorvixe.com</p>
                </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div class="info-card">
                    <div class="icon-box">
                        <i class="bi bi-clock"></i>
                    </div>
                    <h3>Opening Hour</h3>
                    <p>Monday - Friday: 9:00 - 18:00<br>
                        Saturday & Sunday: Closed</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="form-wrapper" data-aos="fade-up" data-aos-delay="400">
                    <form action="<?php echo base_url('store')?>" method="POST" id="contactForm">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                                    <input type="text" name="name" class="form-control" placeholder="Your name*"
                                        minlength="3" maxlength="50" required onkeypress="return ValidateAlpha(event)">
                                </div>
                            </div>

                            <div class="col-md-6 form-group">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                    <input type="email" class="form-control" name="email" maxlength="50" minlength="10"
                                        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="Email address*" required>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6 form-group">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-phone"></i></span>
                                    <input type="text" class="form-control" name="phone" id="phno"
                                        placeholder="Phone number*" minlength="10" maxlength="10" required
                                        onkeypress="return validatePhoneNumber(event)">
                                </div>
                                <small id="phoneError" class="text-danger" style="display:none;">Phone number must
                                    start with 6-9</small>
                            </div>

                            <div class="col-md-6 form-group">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-list"></i></span>
                                    <select name="subject" class="form-control" required>
                                        <option value="">Select service*</option>
                                        <option value="Service 1">Consulting</option>
                                        <option value="Service 2">Development</option>
                                        <option value="Service 3">Marketing</option>
                                        <option value="Service 4">Support</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group mt-3">
                            <div class="input-group">
                                <span class="input-group-text"><i class="bi bi-chat-dots"></i></span>
                                <textarea class="form-control" name="message" rows="6" placeholder="Write a message*"
                                    minlength="10" maxlength="200" required></textarea>
                            </div>
                        </div>

                        <div class="my-3">
                            <div class="error-message alert alert-danger" style="display:none;"></div>
                        </div>

                        <div class="text-center">
                            <button type="submit" id="submitBtn" class="btn btn-primary">
                                <span id="submitText">Submit Message</span>
                                <span id="submitSpinner" class="spinner-border spinner-border-sm" role="status"
                                    aria-hidden="true" style="display:none;"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section><!-- /Contact Section -->

<!-- Success Modal -->
<div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-5">
                <div class="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#28a745"
                        class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <h3 class="mb-3">Thank You!</h3>
                <p>Your message has been sent successfully.</p>
                <p>**Our Team will Contact you Soon.**</p>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

<script>
// Alpha validation for name field
function ValidateAlpha(evt) {
    var keyCode = (evt.which) ? evt.which : evt.keyCode;
    // Allow letters, space, backspace, delete, tab, and arrow keys
    if ((keyCode < 65 || keyCode > 90) &&
        (keyCode < 97 || keyCode > 123) &&
        keyCode != 32 &&
        keyCode != 8 && // Backspace
        keyCode != 46 && // Delete
        keyCode != 9 && // Tab
        keyCode != 37 && // Left arrow
        keyCode != 39) { // Right arrow
        return false;
    }
    return true;
}

// Phone number validation
function validatePhoneNumber(event) {
    const inputField = event.target;
    const errorField = document.getElementById("phoneError");
    const key = event.key;

    // Allow control keys
    if (
        event.keyCode === 8 || // Backspace
        event.keyCode === 46 || // Delete
        event.keyCode === 37 || // Left arrow
        event.keyCode === 39 || // Right arrow
        event.keyCode === 9 // Tab
    ) {
        errorField.style.display = "none";
        return true;
    }

    // Prevent non-numeric input
    if (!/^[0-9]$/.test(key)) {
        return false;
    }

    const currentValue = inputField.value;

    // First digit validation: only 6, 7, 8, or 9
    if (currentValue.length === 0 && !/[6-9]/.test(key)) {
        errorField.style.display = "inline";
        return false;
    } else {
        errorField.style.display = "none";
    }

    // Limit to 10 digits
    if (currentValue.length >= 10) {
        return false;
    }

    return true;
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneInput = document.getElementById("phno");
    const phoneError = document.getElementById("phoneError");
    const errorDiv = document.querySelector('.error-message');
    const form = this;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');

    // Reset messages
    errorDiv.style.display = 'none';

    // Phone validation
    if (phoneInput.value.length < 10) {
        phoneError.textContent = "Phone number must be 10 digits";
        phoneError.style.display = "inline";
        return false;
    }

    if (!/^[6-9]/.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must start with 6-9";
        phoneError.style.display = "inline";
        return false;
    }

    // Show loading state on the button
    submitText.textContent = "Sending...";
    submitSpinner.style.display = "inline-block";
    submitBtn.disabled = true;

    // Submit form via AJAX
    const formData = new FormData(form);

    fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            // Reset button state
            submitText.textContent = "Submit Message";
            submitSpinner.style.display = "none";
            submitBtn.disabled = false;

            // Clear form fields
            form.reset();

            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        })
        .catch(error => {
            // Reset button state
            submitText.textContent = "Submit Message";
            submitSpinner.style.display = "none";
            submitBtn.disabled = false;

            // Show error message
            errorDiv.style.display = 'block';
            errorDiv.textContent = 'There was an error sending your message. Please try again.';
        });
});

// Clear phone error when typing
document.getElementById("phno").addEventListener('input', function() {
    document.getElementById("phoneError").style.display = "none";
});
</script>