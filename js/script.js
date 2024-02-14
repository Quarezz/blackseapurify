document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container');
    const galleryModal = $('#galleryModal');
    const galleryModalBody = galleryModal.find('.modal-body');

    // Function to apply state to an image container
    function applyState(image) {
        const currentState = image.getAttribute('data-state');
        const galleryButton = image.querySelector('.view-gallery');
        if (currentState === "Destroyed") {
            galleryButton.style.display = 'block';
            // Apply any visual indication for "Destroyed" state here, if needed
        } else {
            galleryButton.style.display = 'none';
            // Revert any visual changes for "Normal" state here, if needed
        }
    }

    // Function to open gallery modal
    function openGallery(image) {
        const galleryContent = `
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <img src="assets/destroyed_proof/moskva.png" class="img-fluid" alt="Gallery Image 1">
                    <video controls id="galleryVideo" class="video-responsive">
                        <source src="assets/destroyed_proof/moskva.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                </div>
                <!-- Add more images/videos as needed -->
            </div>
        `;
        galleryModalBody.html(galleryContent);
        galleryModal.modal('show'); // This line should show the modal

        galleryModal.on('hide.bs.modal', function () {
            // Pause the video
            var video = document.getElementById('galleryVideo');
            if (video) {
                video.pause();
            }
        });
    }

    // Apply initial states
    images.forEach(image => {
        applyState(image); // Apply state on page load
        
        // Handle "View Gallery" button click
        image.querySelector('.view-gallery').addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the image state toggling
            openGallery(image);
        });

        // Toggle state on click
        // Debug feature...
        // image.addEventListener('click', function() {
        //     const currentState = this.getAttribute('data-state');
        //     if (currentState === "Normal") {
        //         this.setAttribute('data-state', 'Destroyed');
        //     } else {
        //         this.setAttribute('data-state', 'Normal');
        //     }
        //     applyState(this); // Re-apply state after toggle
        // });
    });
});