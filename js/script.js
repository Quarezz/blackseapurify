let ships = [
    [ // Ракетні крейсери
        {
            "name": "Гвардейський ракетний крейсер проекту 1164 \"Москва\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [
                "assets/destroyed_proof/moskva.png",
                "assets/destroyed_proof/moskva.mp4"
            ]
        }
    ],
    [ // Фрегати
        {
            "name": "Фрегат проекту 11356 \"Адмірал Грігоровіч\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Фрегат проекту 11356 \"Адмірал Ессен\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Фрегат проекту 11356 \"Адмірал Макаров\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        }
    ],
    [ // Сторжеві
        {
            "name": "Сторжевий корабель проекту 1135 \"Ладний\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Сторжевий корабель проекту 1135-М \"Питлівий\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Корвет проекту 20380 \"Меркурій\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        }
    ],
    [ // Великі десантни
        {
            "name": "Великий десантний корабель проекту 1171 \"Саратов\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [
                
            ]
        },
        {
            "name": "Великий десантний корабель проекту 1171 \"Ніколай Фільчєнков\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Великий десантний корабель проекту 1171 \"Орєх\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Азов\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Олєнєгорскій горняк\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Цезарь Куніков\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [
                
            ]
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Новочєркасск\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [
                
            ]
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Мінск\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [
                
            ]
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Ямал\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        }
    ]
]

document.addEventListener('DOMContentLoaded', function () {
    // Function to open gallery modal
    function openGallery(ship) {
        const galleryModal = $('#galleryModal');
        const galleryModalBody = galleryModal.find('.modal-body');

        var galleryRow = document.createElement("div")
        galleryRow.className="row"

        var galleryCollumn = document.createElement("div")
        galleryCollumn.className = "col-lg-4 col-md-6 mb-4"
        galleryRow.appendChild(galleryCollumn)

        ship.media.forEach(item => {
            if (item.endsWith("mp4")) {
                var video = document.createElement("video")
                video.controls = true
                video.id = "galleryVideo"
                video.className = "video-responsive"
                video.src = item
                video.type = "video/mp4"
                galleryCollumn.appendChild(video)
            } else if (item.endsWith("jpg") || (item.endsWith("png"))) {
                var image = document.createElement("img")
                image.src = item
                image.className = "img-fluid"
                galleryCollumn.appendChild(image)
            }
        })
        
        galleryModalBody.html(galleryRow.innerHTML);
        galleryModal.modal('show'); // This line should show the modal

        galleryModal.on('hide.bs.modal', function () {
            // Pause the video
            var video = document.getElementById('galleryVideo');
            if (video) {
                video.pause();
            }
        });
    }
    // Builds HTML grid of ships
    function buildShipsGrid(ships) {
        var grid = document.getElementById('container')
        ships.forEach(row => {
            var rowElement = document.createElement("div")
            rowElement.className = "row"
            row.forEach(ship => { 
                var shipElement = document.createElement("div")
                shipElement.className = "col-md-4 mb-4"

                var shipContainer = document.createElement("div")
                shipContainer.className = "image-container"
                shipContainer.setAttribute("data-state", ship.status)
                shipElement.appendChild(shipContainer)

                var image = document.createElement("img")
                image.className = "img-fluid"
                image.src = ship.image
                shipContainer.appendChild(image)

                var caption = document.createElement("p")
                caption.className="image-caption"
                caption.innerText=ship.name
                shipContainer.appendChild(caption)

                var button = document.createElement("button")
                button.className="btn btn-primary view-gallery"
                button.style.display = ship.status === "down" ? 'block' : 'none'
                button.innerText = "View Gallery"
                button.addEventListener('click', function (event) {
                    event.stopPropagation(); // Prevent the image state toggling
                    openGallery(ship);
                });
                shipContainer.appendChild(button)

                rowElement.appendChild(shipElement)
            })
            grid.appendChild(rowElement)
        })
    }

    // Execution starts here
    buildShipsGrid(ships)
});