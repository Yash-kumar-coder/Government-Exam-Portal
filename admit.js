 // Mobile Menu Toggle Functionality
        const toggleBtn = document.getElementById('toggleBtn');
        const navContainer = document.getElementById('navContainer');
        
        toggleBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            
            // Change icon based on state
            if (navContainer.classList.contains('active')) {
                toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Highlight current page in navigation
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });

        // Icons mapping for exam types
        const examIcons = {
            "Bihar": "fas fa-landmark",
            "UPSC": "fas fa-medal",
            "Railway": "fas fa-train",
            "SSC": "fas fa-file-contract",
            "Bank": "fas fa-university",
            "Rajasthan": "fas fa-fort-awesome",
            "NTA": "fas fa-graduation-cap",
            "General": "fas fa-file-alt"
        };

        // Function to get exam icon
        function getExamIcon(title) {
            if (title.includes("Bihar")) return examIcons.Bihar;
            if (title.includes("UPSC")) return examIcons.UPSC;
            if (title.includes("Railway")) return examIcons.Railway;
            if (title.includes("SSC")) return examIcons.SSC;
            if (title.includes("Bank")) return examIcons.Bank;
            if (title.includes("Rajasthan")) return examIcons.Rajasthan;
            if (title.includes("NTA")) return examIcons.NTA;
            return examIcons.General;
        }

        // Admit card data with real details
        const admitCards = [
            {
                title: "Bihar BSSC Field Assistant Pre Admit Card 2025",
                org: "Bihar Staff Selection Commission",
                status: "out",
                description: "Admit card for BSSC Field Assistant Pre Examination 2025 has been released. Download from the official website.",
                date: "2025-07-10",
                link: "https://bssc.bih.nic.in"
            },
            {
                title: "Bihar Vidhan Sabha Security Guard Pre Admit Card 2025",
                org: "Bihar Legislative Assembly",
                status: "out",
                description: "Admit card for Security Guard position is now available for download.",
                date: "2025-07-12",
                link: "https://vidhansabha.bih.nic.in"
            },
            {
                title: "UPSC Engineering Services Mains Admit Card 2025",
                org: "Union Public Service Commission",
                status: "out",
                description: "Admit card for Engineering Services Mains Examination 2025 has been released on UPSC website.",
                date: "2025-07-15",
                link: "https://upsc.gov.in"
            },
            {
                title: "Railway RRB NTPC 10+2 Inter Level Exam City Details 2025",
                org: "Railway Recruitment Board",
                status: "out",
                description: "Exam city details and admit card for RRB NTPC 10+2 Inter Level positions are now available.",
                date: "2025-07-18",
                link: "https://rrbcdg.gov.in"
            },
            {
                title: "SSC JHT Exam Date 2025",
                org: "Staff Selection Commission",
                status: "out",
                description: "Examination dates for Junior Hindi Translator (JHT) 2025 have been announced on SSC website.",
                date: "2025-07-20",
                link: "https://ssc.nic.in"
            },
            {
                title: "SSC Stenographer C, D Exam Date 2025",
                org: "Staff Selection Commission",
                status: "out",
                description: "SSC has announced the examination dates for Stenographer Grade C and D positions.",
                date: "2025-07-22",
                link: "https://ssc.nic.in"
            },
            {
                title: "SCI Junior Court Assistant Descriptive Test Admit Card 2025",
                org: "Supreme Court of India",
                status: "out",
                description: "Admit card for Junior Court Assistant Descriptive Test is available for download.",
                date: "2025-07-25",
                link: "https://sci.gov.in"
            },
            {
                title: "SSC GD Constable Physical Test Date 2025",
                org: "Staff Selection Commission",
                status: "out",
                description: "Physical Test dates for SSC GD Constable positions have been announced.",
                date: "2025-07-28",
                link: "https://ssc.nic.in"
            },
            {
                title: "DSSSB Various Post August – September Exam Schedule 2025",
                org: "Delhi Subordinate Services Selection Board",
                status: "out",
                description: "Examination schedule for various posts in August-September 2025 has been released.",
                date: "2025-07-30",
                link: "https://dsssb.delhi.gov.in"
            },
            {
                title: "SAV Bihar Class 11th Dummy Admit Card 2025-27",
                org: "Bihar School Examination Board",
                status: "out",
                description: "Dummy admit cards for Class 11th students are now available on the board's website.",
                date: "2025-08-01",
                link: "https://biharboardonline.bihar.gov.in"
            },
            {
                title: "Bihar Board Class 10th & 12th Dummy Registration Card 2026",
                org: "Bihar School Examination Board",
                status: "pending",
                description: "Dummy registration cards for Class 10th and 12th students will be available soon.",
                date: "2025-08-10",
                link: "https://biharboardonline.bihar.gov.in"
            },
            {
                title: "BPSC MDO Exam Date 2025",
                org: "Bihar Public Service Commission",
                status: "out",
                description: "Examination dates for Municipal Development Officer (MDO) have been announced.",
                date: "2025-08-05",
                link: "https://bpsc.bih.nic.in"
            },
            {
                title: "BPSC DSO/ AD Admit Card Date 2025",
                org: "Bihar Public Service Commission",
                status: "pending",
                description: "Admit cards for District Supply Officer and Assistant Director positions will be available soon.",
                date: "2025-08-15",
                link: "https://bpsc.bih.nic.in"
            },
            {
                title: "HPCL Junior Executive Exam Date 2025",
                org: "Hindustan Petroleum Corporation Limited",
                status: "out",
                description: "Examination dates for Junior Executive positions have been announced on HPCL website.",
                date: "2025-08-08",
                link: "https://hindustanpetroleum.com"
            },
            {
                title: "Rajasthan RSSB Patwari Exam Date 2025",
                org: "Rajasthan Staff Selection Board",
                status: "out",
                description: "RSSB has announced the examination dates for Patwari positions.",
                date: "2025-08-12",
                link: "https://rsmssb.rajasthan.gov.in"
            },
            {
                title: "UPSC CAPF AC Admit Card 2025",
                org: "Union Public Service Commission",
                status: "out",
                description: "Admit card for Central Armed Police Forces (AC) Examination 2025 is now available.",
                date: "2025-08-14",
                link: "https://upsc.gov.in"
            },
            {
                title: "UP NCVT MIS ITI Admit Card 2025",
                org: "National Council for Vocational Training",
                status: "out",
                description: "Admit cards for ITI examinations in Uttar Pradesh are available on NCVT MIS portal.",
                date: "2025-08-16",
                link: "https://ncvtmis.gov.in"
            },
            {
                title: "SBI Bank PO Pre Admit Card 2025",
                org: "State Bank of India",
                status: "out",
                description: "Admit card for SBI PO Preliminary Examination 2025 has been released.",
                date: "2025-08-18",
                link: "https://sbi.co.in"
            },
            {
                title: "NTA CSIR UGC NET June Admit Card 2025",
                org: "National Testing Agency",
                status: "out",
                description: "Admit cards for CSIR UGC NET June 2025 session are available for download.",
                date: "2025-08-20",
                link: "https://nta.ac.in"
            },
            {
                title: "Bihar Police CSBC Constable Admit Card 2025",
                org: "Central Selection Board of Constable",
                status: "out",
                description: "Admit card for Bihar Police Constable positions is available on CSBC website.",
                date: "2025-08-22",
                link: "https://csbc.bih.nic.in"
            },
            {
                title: "RSSB Librarian Gr-III Admit Card 2025",
                org: "Rajasthan Staff Selection Board",
                status: "pending",
                description: "Admit card for Librarian Grade-III positions will be available soon on RSSB website.",
                date: "2025-08-25",
                link: "https://rsmssb.rajasthan.gov.in"
            }
        ];

        // Function to format date
        function formatDate(dateString) {
            if (!dateString) return "Date not specified";
            
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-IN', options);
        }

        // Function to render admit cards
        function renderCards(cardsToRender) {
            const container = document.getElementById('admitCardsContainer');
            container.innerHTML = '';
            
            if (cardsToRender.length === 0) {
                container.innerHTML = '<div class="no-results" style="text-align:center; padding:40px; font-size:1.2rem; background: white; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">No admit cards found matching your criteria</div>';
                return;
            }
            
            cardsToRender.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'admit-card';
                
                let statusBadge = '';
                let statusClass = '';
                
                if (card.status === 'out') {
                    statusBadge = 'Available Now';
                    statusClass = 'status-out';
                } else if (card.status === 'pending') {
                    statusBadge = 'Coming Soon';
                    statusClass = 'status-pending';
                }
                
                const iconClass = getExamIcon(card.title);
                
                cardElement.innerHTML = `
                    <div class="exam-icon">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="card-header">
                        <h3 class="card-title">${card.title}</h3>
                        <div class="card-org">${card.org}</div>
                        <div class="card-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar-check"></i>
                                Release Date: ${formatDate(card.date)}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-details">${card.description}</p>
                        ${statusBadge ? `<span class="status-badge ${statusClass}">${statusBadge}</span>` : ''}
                    </div>
                    <div class="card-footer">
                        <div class="date-info">
                            <i class="fas fa-info-circle"></i>
                            ${card.status === 'out' ? 'Download before exam date' : 'Check website regularly for updates'}
                        </div>
                        <a href="${card.link}" target="_blank" class="download-btn">
                            <i class="fas fa-download"></i> 
                            ${card.status === 'out' ? 'Download Now' : 'Check Status'}
                        </a>
                    </div>
                `;
                
                container.appendChild(cardElement);
            });
        }

        // Filter cards based on status
        function filterCards(status) {
            if (status === 'all') {
                return admitCards;
            }
            return admitCards.filter(card => card.status === status);
        }

        // Search cards
        function searchCards(query) {
            if (!query) return admitCards;
            
            const lowerQuery = query.toLowerCase();
            return admitCards.filter(card => 
                card.title.toLowerCase().includes(lowerQuery) || 
                card.org.toLowerCase().includes(lowerQuery) ||
                (card.description && card.description.toLowerCase().includes(lowerQuery))
            );
        }

        // Event listeners for filtering and searching
        document.addEventListener('DOMContentLoaded', () => {
            // Initial render
            renderCards(admitCards);
            
            // Filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.dataset.filter;
                    const filteredCards = filterCards(filter);
                    renderCards(filteredCards);
                });
            });
            
            // Search input
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim();
                const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
                let results = admitCards;
                
                if (query) {
                    results = searchCards(query);
                }
                
                if (activeFilter !== 'all') {
                    results = results.filter(card => card.status === activeFilter);
                }
                
                renderCards(results);
            });
        });