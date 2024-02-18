let ships = [
    {
            "name": "Гвардейський ракетний крейсер проекту 1164 \"Москва\"",
            "image": "assets/ships/moscow.png",
            "date": "2022.04.14",
            "status": "down",
            "media": [
                "assets/destroyed_proof/moskva.png",
                "assets/destroyed_proof/moskva.mp4"
            ],
            "type_name": "Ракетний Крейсер",
            "type": "rocket_cruiser"
        },
        {
            "name": "Фрегат проекту 11356 \"Адмірал Грігоровіч\"",
            "image": "assets/ships/fregate.png",
            "status": "pending",
            "type_name": "Фрегат",
            "type": "frigate"
        },
        {
            "name": "Фрегат проекту 11356 \"Адмірал Ессен\"",
            "image": "assets/ships/fregate.png",
            "status": "pending",
            "type_name": "Фрегат",
            "type": "frigate"
        },
        {
            "name": "Фрегат проекту 11356 \"Адмірал Макаров\"",
            "image": "assets/ships/fregate.png",
            "status": "down",
            "date": "2022.10.29",
            "media": [
                "assets/destroyed_proof/makarov_1.mp4",
                "assets/destroyed_proof/makarov_2.jpg",
                "assets/destroyed_proof/makarov_3.jpeg",
                "assets/destroyed_proof/makarov_4.jpg"
            ],
            "type_name": "Фрегат",
            "type": "frigate"
        },
        {
            "name": "Сторжевий корабель проекту 1135 \"Ладний\"",
            "image": "assets/ships/fregate.png",
            "status": "pending",
            "type_name": "Фрегат",
            "type": "frigate"
        },
        {
            "name": "Сторжевий корабель проекту 1135-М \"Питлівий\"",
            "image": "assets/ships/fregate.png",
            "status": "pending",
            "type_name": "Корвет",
            "type": "frigate"
        },
        {
            "name": "Корвет проекту 20380 \"Меркурій\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Корвет",
            "type": "corvete"
        },
        {
            "name": "Великий десантний корабель проекту 1171 \"Саратов\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2022.03.24",
            "media": [
                "assets/destroyed_proof/saratov_1.mp4",
                "assets/destroyed_proof/saratov_2.jpg"
            ],
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 1171 \"Ніколай Фільчєнков\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 1171 \"Орєх\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Азов\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Олєнєгорскій горняк\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2023.08.04",
            "media": [
                "assets/destroyed_proof/olen_1.mp4",
                "assets/destroyed_proof/olen_2.mp4",
                "assets/destroyed_proof/olen_3.jpg",
                "assets/destroyed_proof/olen_4.png",
                "assets/destroyed_proof/olen_5.mp4",
            ],
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Цезарь Куніков\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2024.02.14",
            "media": [
                "assets/destroyed_proof/cesar_1.mp4",
                "assets/destroyed_proof/cesar_2.jpeg"
            ],
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Новочєркасск\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2023.12.26",
            "media": [
                "assets/destroyed_proof/novocherkas_0.MP4",
                "assets/destroyed_proof/novocherkas_01.mp4",
                "assets/destroyed_proof/novocherkas_1.jpeg",
                "assets/destroyed_proof/novocherkas_2.jpeg",
                "assets/destroyed_proof/novocherkas_3.jpeg",
                "assets/destroyed_proof/novocherkas_4.jpeg",
                "assets/destroyed_proof/novocherkas_5.jpeg",
                "assets/destroyed_proof/novocherkas_6.jpeg",
                "assets/destroyed_proof/novocherkas_7.png",
                "assets/destroyed_proof/novocherkas_8.jpeg",
                "assets/destroyed_proof/novocherkas_9.jpeg",
                "assets/destroyed_proof/novocherkas_10.jpeg",
                "assets/destroyed_proof/novocherkas_11.jpeg",
            ],
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Мінск\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "media": [
                "assets/destroyed_proof/minsk.jpeg",
                "assets/destroyed_proof/minsk_1.jpeg",
                "assets/destroyed_proof/minsk_2.mp4"
            ],
            "type_name": "Великий Десантний",
            "date": "2023.09.13",
            "type": "landing"
        },
        {
            "name": "Великий десантний корабель проекту 775 \"Ямал\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Великий Десантний",
            "type": "landing"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Муромєц\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Суздалєц\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Касімов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Єйск\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Поворіно\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий протичовновий корабель проекту 1124М \"Алєксандровєц\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі протичовнові",
            "type": "small_corvete"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Вишній Волчьок\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Орєхово-Зуєво\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 1239 \"Бора\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 1239 \"Самум\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 22800 \"Циклон\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Грайворон\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 21631 \"Інгушетік\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Малий ракетний корабель проекту 22800 \"Аскольд\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "media": [
                "assets/destroyed_proof/askold_1.jpg",
                "assets/destroyed_proof/askold_1.mp4",
                "assets/destroyed_proof/askold_2.jpg"
            ],
            "date": "2023.11.04",
            "type_name": "Малі ракетні",
            "type": "small_rocket"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Васілій Биков\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Патрульні",
            "type": "patrol"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Дмітрій Рогачьов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Патрульні",
            "type": "patrol"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Павєл Дєржавін\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Патрульні",
            "type": "patrol"
        },
        {
            "name": "Патрульниий корабель проекту 22160 \"Сєргєй Котов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Патрульні",
            "type": "patrol"
        },
        {
            "name": "Тральщик проекту 266-М \"Іван Голубєц\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Тральщик проекту 266-М \"Ковровєц\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Іван Антонов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Владімір Ємєльянов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Базовий тральщик проекту 12700 \"Гєоргій Курбатов\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Морський тральщик проекту 266-М \"Турбініст\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Базовий тральщик проекту 1265 \"Мінєральниє води\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Морський тральщик проекту 12660 \"Желєзняков\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Морський тральщик проекту 266МЕ \"Валєнтін Пікуль\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Морський тральщик проекту 266МЕ \"Віце-адмірал Захарин\"",
            "image": "assets/ship_test.png",
            "status": "pendind",
            "type_name": "Тральщики",
            "type": "traller"
        },
        {
            "name": "Ракетний катер проекту 1241 \"Івановєц\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "media": [
                "assets/destroyed_proof/ivan_1.jpg",
                "assets/destroyed_proof/ivan_2.mp4"
            ],
            "date": "2024.02.01",
            "type_name": "Ракетні катери",
            "type": "rocket_boat"
        },
        {
            "name": "Ракетний катер проекту 1241 \"Набєрєжниє Чєлни\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Ракетні катери",
            "type": "rocket_boat"
        },
        {
            "name": "Ракетний катер проекту 1241 \"Р-60\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Ракетні катери",
            "type": "rocket_boat"
        },
        {
            "name": "Рятівне буксирне судно проекту 22870 \"Васілій Бех\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "media": [
                "assets/destroyed_proof/vasiliy_1.mp4",
            ],
            "date": "2022.06.17",
            "type_name": "Буксири",
            "type": "puller"
        },
        {
            "name": "Десантний катер проекту 11770 \"Д-144\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2023-11-10",
            "media": [
                "assets/destroyed_proof/d_144.mp4"
            ],
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Десантний катер проекту 11770 \"Д-199\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2022-05-07",   
            "media": [
                "assets/destroyed_proof/d_199.mp4"
            ],
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Десантний катер проекту 1176 \"Д-295\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Десантний катер проекту 1176 \"Д-106\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Десантний катер проекту 02510 \"Д-295\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Десантний катер проекту 02510 \"Д-309\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Десантні катери",
            "type": "landing_boat"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"Кінель\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"П-433\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"Курсант Кіровєц\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"Юнармєєц Крима\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"Суворовєц\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Протидиверсійний катер проекту 21980 \"Кадет\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Протидиверсійні катери",
            "type": "antidiversion"
        },
        {
            "name": "Підводний човен проекту 877В \"Апроса\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Ростов-на-Дону\"",
            "image": "assets/ship_test.png",
            "status": "down",
            "date": "2023.09.12",
            "media": [
                "assets/destroyed_proof/rostov_1.jpeg",
                "assets/destroyed_proof/rostov_2.jpeg"
            ],
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Новороссійск\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Старий Оскол\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Краснодар\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Вєлікій Новгород\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        },
        {
            "name": "Підводний човен проекту 646.3 \"Колпіно\"",
            "image": "assets/ship_test.png",
            "status": "pending",
            "type_name": "Підводні човни",
            "type": "submarine"
        }
]

document.addEventListener('DOMContentLoaded', function () {
    // Function to open gallery modal
    function openGallery(ship) {
        const galleryModal = $('#galleryModal');
        const galleryModalBody = galleryModal.find('.modal-body');
        
        // Clear the modal's existing content
        galleryModalBody.empty();

        var galleryRow = document.createElement("div")
        galleryRow.className="row"

        ship.media.forEach(item => {
            const galleryColumn = document.createElement("div");
            galleryColumn.className = "col-sm-6 col-md-4 col-lg-3"; // This sets up the grid layout
            if (item.endsWith("mp4") || item.endsWith("MP4")) {
                var video = document.createElement("video")
                video.controls = true
                video.id = "galleryVideo"
                video.className = "video-responsive"
                video.src = item
                video.type = "video/mp4"
                galleryColumn.appendChild(video)
            } else if (item.endsWith("jpg") || item.endsWith("jpeg") || (item.endsWith("png"))) {
                var image = document.createElement("img")
                image.src = item
                image.className = "img-fluid"
                galleryColumn.appendChild(image)
            }
            galleryRow.appendChild(galleryColumn);
        })
        
        galleryModalBody.append(galleryRow); // Use 'append' instead of 'html' to keep event listeners
        
        galleryModal.on('shown.bs.modal', function () {
            let modalMaxHeight = $(window).height() * 0.9; // 90% of the window height
            let modalHeaderHeight = $(this).find('.modal-header').outerHeight();
            let modalFooterHeight = $(this).find('.modal-footer').outerHeight();
            let modalBodyMaxHeight = modalMaxHeight - modalHeaderHeight - modalFooterHeight;
            
            galleryModalBody.css('max-height', modalBodyMaxHeight);
        });
        galleryModal.modal('show');
        
        galleryModal.on('hide.bs.modal', function () {
            // Pause the video
            var video = document.getElementById('galleryVideo');
            if (video) {
                video.pause();
            }
        });
    }
    // Builds HTML grid of ships
    function buildShipsGrid(ships, type) {
        const tabContent = document.getElementById(`container-${type}`);
        tabContent.innerHTML = ''; // Clear existing content
    
        ships.forEach((ship, index) => {
            var card = document.createElement("div");
            card.className = "card";
            card.setAttribute("data-status", ship.status);
    
            var imageWrapper = document.createElement("div");
            imageWrapper.className = "image-wrapper position-relative";
            
            var image = document.createElement("img");
            image.className = "card-img-top";
            image.src = ship.image;
            image.alt = ship.name;
            imageWrapper.appendChild(image);
    
            if (ship.status === "down") {
                var overlay = document.createElement("div");
                overlay.className = "overlay";
                overlay.classList.add('show-overlay'); // This class will be toggled based on the ship's status
                imageWrapper.appendChild(overlay);
            }
    
            var cardBody = document.createElement("div");
            cardBody.className = "card-body";
    
            var title = document.createElement("h5");
            title.className = "card-title";
            title.innerText = ship.name;
            cardBody.appendChild(title);
    
            if (ship.status === "down") {
                var dateText = document.createElement("p");
                dateText.className = "card-text";
                dateText.innerText = ship.date;
                cardBody.appendChild(dateText);
    
                var button = document.createElement("button");
                button.className = "btn btn-link p-0 view-gallery-btn";
                button.innerText = "View Gallery";
                button.setAttribute("data-ship-index", index);
                // onClick is set after tabs are appended x_x
                cardBody.appendChild(button);
            }
    
            card.appendChild(imageWrapper);
            card.appendChild(cardBody);
            tabContent.appendChild(card);
        });
    }
    function setupSlider() {
        // Get the slider element
        const cardWidthSlider = document.getElementById('cardWidthSlider');
        // Listen for changes on the slider
        cardWidthSlider.addEventListener('input', function() {
            var newValue = this.value;
            // Update the grid-template-columns with the new width
            let containers = document.querySelectorAll('.ship-grid-container')
            containers.forEach(container => {
                // TODO: fix slider for all containers
                container.style.gridTemplateColumns = `repeat(auto-fit, minmax(${newValue}px, 1fr))`;
            })
        });
    }
    function setupTabBar() {
        const tabsContainer = document.getElementById('shipTabs');
        const tabContentContainer = document.getElementById('shipTabsContent');
        // Create "All" tab and content pane
        tabsContainer.innerHTML += `
                <li class="nav-item">
                    <a class="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">Всі</a>
                </li>
            `;
        tabContentContainer.innerHTML += `
            <div class="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div class="ship-grid-container" id="container-all">
                    <!-- Grid for "Всі" will go here -->
                </div>
            </div>
        `;
    }
    function populateAllTab() {
        buildShipsGrid(ships, 'all');
        // Add 'show active' classes to the 'All' tab link
        document.querySelector('#all-tab').classList.add('show', 'active');
        // Add 'show active' classes to the 'All' tab content pane
        document.querySelector('#all').classList.add('show', 'active');
    }
    function populateTypeTabs() {
        const tabsContainer = document.getElementById('shipTabs');
        const tabContentContainer = document.getElementById('shipTabsContent');
        var typesDict = {}
        ships.forEach(ship => {
            typesDict[ship.type] = ship
        })
        // Create tabs for each unique type
        for (let type in typesDict) {
            const ship = typesDict[type]
            tabsContainer.innerHTML += `
                <li class="nav-item">
                    <a class="nav-link" id="${type}-tab" data-toggle="tab" href="#${type}" role="tab" aria-controls="${type}" aria-selected="false">${ship.type_name}</a>
                </li>
            `;
            tabContentContainer.innerHTML += `
                <div class="tab-pane fade" id="${type}" role="tabpanel" aria-labelledby="${type}-tab">
                    <div class="ship-grid-container" id="container-${type}">
                        <!-- Grid for "${type}" will go here -->
                    </div>
                </div>
            `;
            buildShipsGrid(ships.filter(ship => ship.type === type), type)
        }
    }
    function addGalleryClickListener() {
        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('view-gallery-btn')) {
                var shipIndex = event.target.getAttribute('data-ship-index');
                openGallery(ships[shipIndex]);
            }
        });
    }

    setupSlider()
    setupTabBar()
    populateAllTab()
    populateTypeTabs()
    addGalleryClickListener()
});