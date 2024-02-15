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
    ],
    [ // Малі протичовнові
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Муромєц\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Суздалєц\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Касімов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Єйск\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Поворіно\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Алєксандровєц\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        }
    ],
    [ // Малий ракетний
        {
            "name": "Малий ракетний корабель проекту 21631 \"Вишній Волчьок\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Орєхово-Зуєво\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 1239 \"Бора\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 1239 \"Самум\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 22800 \"Циклон\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Грайворон\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Інгушетік\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Малий ракетний корабель проекту 22800 \"Аскольд\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        }
    ],
    [ // Патрульні
        {
            "name": "Патрульниий корабель проекту 22160 \"Васілій Биков\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Дмітрій Рогачьов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Павєл Дєржавін\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Сєргєй Котов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        }
    ],
    [ // Тральщики
        {
            "name": "Тральщик проекту 266-М \"Іван Голубєц\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Тральщик проекту 266-М \"Ковровєц\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Іван Антонов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Владімір Ємєльянов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Гєоргій Курбатов\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Морський тральщик проекту 266-М \"Турбініст\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Базовий тральщик проекту 1265 \"Мінєральниє води\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Морський тральщик проекту 12660 \"Желєзняков\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Морський тральщик проекту 266МЕ \"Валєнтін Пікуль\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        },
        {
            "name": "Морський тральщик проекту 266МЕ \"Віце-адмірал Захарин\"",
            "image": "assets/ship_test.jpg",
            "status": "pendind"
        }
    ],
    [ // Ракетні катери
        {
            "name": "Ракетний катер проекту 1241 \"Івановєц\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        },
        {
            "name": "Ракетний катер проекту 1241 \"Набєрєжниє Чєлни\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Ракетний катер проекту 1241 \"Р-60\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        }
    ],
    [ // Буксири
        {
            "name": "Рятівне буксирне судно проекту 22870 \"Васілій Бек\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        }
    ],
    [ // Десантні катери
        {
            "name": "Десантний катер проекту 11770 \"Д-144\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        },
        {
            "name": "Десантний катер проекту 11770 \"Д-199\"",
            "image": "assets/ship_test.jpg",
            "status": "down",
            "media": [

            ]
        },
        {
            "name": "Десантний катер проекту 1176 \"Д-295\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Десантний катер проекту 1176 \"Д-106\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Десантний катер проекту 02510 \"Д-295\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
        },
        {
            "name": "Десантний катер проекту 02510 \"Д-309\"",
            "image": "assets/ship_test.jpg",
            "status": "pending"
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