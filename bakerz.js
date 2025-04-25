        // Function to populate the order form with product details
        function orderItem(productName, productPrice) {
            document.getElementById('product-name').value = productName;
            document.getElementById('product-price').value = productPrice;
            document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Add functionality to handle form submission
        document.getElementById('order-form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Get form values
            const productName = document.getElementById('product-name').value;
            const productPrice = document.getElementById('product-price').value;
            const customerName = document.getElementById('customer-name').value;
            const customerEmail = document.getElementById('customer-email').value;
            const customerAddress = document.getElementById('customer-address').value;

            // Validate form fields
            if (!productName || !productPrice || !customerName || !customerEmail || !customerAddress) {
                alert('Please fill in all the required fields.');
                return;
            }

            // Display confirmation message
            alert(`Thank you, ${customerName}! Your order for ${productName} (${productPrice}) has been placed successfully. We will deliver it to ${customerAddress}.`);

            // Reset the form
            document.getElementById('order-form').reset();
        });