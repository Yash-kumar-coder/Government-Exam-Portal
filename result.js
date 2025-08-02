     // Mobile menu toggle
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

        // Result data with links
        const results = [
   {
    title: "NTA AIAPGET Result 2025",
    org: "National Testing Agency",
    date: "2025-07-30",
    status: "out",
    description: "The NTA has officially declared the AIAPGET 2025 examination results for all candidates today.",
    link: "https://www.sarkariexam.com/aiapget-result-2025"
  },
  {
    title: "Rajasthan RSMSSB Junior Engineer JEN Result 2025",
    org: "Rajasthan Subordinate and Ministerial Services Selection Board",
    date: "2025-07-30",
    status: "out",
    description: "Rajasthan RSMSSB has published the Junior Engineer JEN recruitment examination final results today.",
    link: "https://rssb.rajasthan.gov.in/results"
  },
  {
    title: "UPSC IES / ISS Result 2025",
    org: "Union Public Service Commission",
    date: null,
    status: "out",
    description: "UPSC has announced the final results for the Indian Economic Service and Statistical Service examinations.",
    link: "https://upsc.gov.in/exams-related-info/final-result"
  },
  {
    title: "India Post GDS 6th Merit List 2025",
    org: "India Post",
    date: "2025-07-30",
    status: "out",
    description: "India Post has released the sixth merit list for Gramin Dak Sevak recruitment positions across India.",
    link: "https://indiapostgdsonline.gov.in/"
  },
  {
    title: "UPSC Geo-Scientist Mains Result 2025 (Name Wise)",
    org: "Union Public Service Commission",
    date: null,
    status: "out",
    description: "The UPSC Geo-Scientist Mains examination results with candidate names are now available on the official website.",
    link: "https://upsc.gov.in/exams-related-info/written-result"
  },
  {
    title: "BIS Group A, B, C Post 2024 Final Result",
    org: "Bureau of Indian Standards",
    date: null,
    status: "out",
    description: "Bureau of Indian Standards has declared the final recruitment results for Group A, B, and C positions.",
    link: "https://www.bis.gov.in/"
  },
  {
    title: "OFSS Bihar 11th 3rd Merit List 2025-27",
    org: "OFSS Bihar",
    date: null,
    status: "out",
    description: "The third merit list for Bihar 11th class admissions 2025-27 session has been published by OFSS Bihar.",
    link: "https://ofssbihar.in/"
  },
  {
    title: "SSC JHT 2024 Final Result",
    org: "Staff Selection Commission",
    date: "2025-07-25",
    status: "out",
    description: "Staff Selection Commission has released the final results for Junior Hindi Translator examination 2024.",
    link: "https://ssc.gov.in"
  },
  {
    title: "Indian Army Agniveer CEE Result 2025",
    org: "Indian Army",
    date: "2025-07-26",
    status: "out",
    description: "Indian Army has declared the Agniveer Common Entrance Examination results for various technical trades.",
    link: "https://joinindianarmy.nic.in"
  },
  {
    title: "MPESB PNST/ GNMTST Result 2025",
    org: "MP Employees Selection Board",
    date: null,
    status: "out",
    description: "MPESB has published the Pre-Nursing Selection Test and General Nursing Midwifery Training Test results today.",
    link: "https://esb.mp.gov.in/results/RESULT_25/PNST_GNMTST_RES25/default_Results.htm"
  },
  {
    title: "MP ANMTST Result 2025",
    org: "MP Employees Selection Board",
    date: "2025-07-25",
    status: "out",
    description: "Madhya Pradesh ANMTST 2025 results for Auxiliary Nurse Midwife Training have been officially declared.",
    link: "https://esb.mp.gov.in/results/RESULT_25/ANMTST_RES25/default_Results.htm"
  },
  {
    title: "Central Bank CBI Apprentices Final Result 2025",
    org: "Central Bank of India",
    date: "2025-07-25",
    status: "out",
    description: "Central Bank of India has announced the final results for Apprentice recruitment positions nationwide.",
    link: "https://www.centralbankofindia.co.in/en/recruitments"
  },
  {
    title: "JPSC Civil Services Final Result 2025",
    org: "Jharkhand Public Service Commission",
    date: null,
    status: "out",
    description: "JPSC has declared the final results for Jharkhand Civil Services Examination 2025 on their portal.",
    link: "https://www.jpsc.gov.in/"
  },
  {
    title: "ITBP Medical Officer MO Result 2025",
    org: "Indo-Tibetan Border Police",
    date: null,
    status: "out",
    description: "ITBP has published the Medical Officer recruitment examination results for various medical positions.",
    link: "https://recruitment.itbpolice.nic.in/rect/statics/results"
  },
  {
    title: "LNMU UG 2nd Merit List 2025-29",
    org: "Lalit Narayan Mithila University",
    date: null,
    status: "out",
    description: "LNMU has released the second merit list for undergraduate admissions for the academic session 2025-29.",
    link: "https://www.lnmu.ac.in/admission-home"
  },
  {
    title: "BRABU UG 2nd Merit List 2025-29",
    org: "B. R. Ambedkar Bihar University",
    date: "2025-07-21",
    status: "out",
    description: "BRABU has published the second merit list for UG courses for the upcoming academic session 2025-29.",
    link: "https://brabu.ac.in/home/UGAdmission"
  },
  {
    title: "NTA UGC NET June Result 2025",
    org: "National Testing Agency",
    date: null,
    status: "pending",
    description: "The National Testing Agency will soon announce the UGC NET June 2025 examination final results.",
    link: "https://ugcnet.nta.ac.in/"
  },
  {
    title: "AIIMS BSc Nursing 1st Round Seat Allocation Result 2025",
    org: "AIIMS",
    date: null,
    status: "pending",
    description: "AIIMS is expected to release the first round seat allocation results for BSc Nursing shortly.",
    link: "https://www.aiimsexams.ac.in/info/archive_result2025.html"
  },
  {
    title: "Bihar CET B.Ed 2nd Merit List 2025",
    org: "Bihar CET",
    date: null,
    status: "pending",
    description: "Bihar CET will publish the second merit list for B.Ed admissions 2025 in the coming days.",
    link: "https://biharcetbed-lnmu.in/"
  },
  {
    title: "Bihar Diploma DECE LE 2025 1st Round Allotment Result",
    org: "Bihar Diploma",
    date: "2025-07-18",
    status: "out",
    description: "Bihar Diploma has declared the first round allotment results for DECE Lateral Entry admissions.",
    link: "https://bceceboard.bihar.gov.in/"
  },
  {
    title: "MP MPESB ADDET Result 2025",
    org: "MP Employees Selection Board",
    date: "2025-07-16",
    status: "out",
    description: "MPESB has announced the Agriculture Diploma Entrance Test results for various agricultural colleges.",
    link: "https://esb.mp.gov.in/results/RESULT_25/ADDET_RES25/default_Results.htm"
  },
  {
    title: "IIT JEE Advanced Score Card 2025",
    org: "Indian Institute of Technology",
    date: "2025-07-17",
    status: "out",
    description: "IITs have released the JEE Advanced 2025 score cards with all India ranks on the official portal.",
    link: "https://jeeadv.ac.in/"
  },
  {
    title: "Bihar ITI CAT 2025 1st Round Allotment Result",
    org: "BCECEB",
    date: "2025-07-31",
    status: "out",
    description: "Bihar ITI CAT 2025 first round allotment results have been published on the BCECEB website.",
    link: "https://bceceboard.bihar.gov.in/"
  }
  

]
  ;
        

        // Function to format date
       

        function formatDate(dateString) {
    if (!dateString) return 'Not Available';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', options);
}


        // Function to calculate time ago
     


        function timeAgo(dateString) {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInDays > 0) {
        return `Published ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
        return `Published ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
        return `Published ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else {
        return "Published just now";
    }
}


        // Function to render result cards
        function renderResults(resultsToRender) {
            const container = document.getElementById('resultsContainer');
            
            // Clear previous results (keep the featured card)
            const featuredCard = container.querySelector('.featured-card');
            container.innerHTML = '';
            if (featuredCard) container.appendChild(featuredCard);
            
            if (resultsToRender.length === 0) {
                container.innerHTML += '<div class="no-results">No results found matching your criteria</div>';
                return;
            }
            
            resultsToRender.forEach(result => {
                const card = document.createElement('div');
                card.className = 'result-card';
                
                let statusBadge = '';
                let statusClass = '';
                
                if (result.status === 'out') {
                    statusBadge = 'Result Declared';
                    statusClass = 'status-out';
                } else if (result.status === 'pending') {
                    statusBadge = 'Pending';
                    statusClass = 'status-pending';
                } else if (result.status === 'update') {
                    statusBadge = 'Updated';
                    statusClass = 'status-update';
                }
                
                card.innerHTML = `
                    <div class="result-header">
                        <h3 class="result-title">${result.title}</h3>
                        <div class="result-org">${result.org}</div>
                        <div class="result-meta">
                            <div class="meta-item"><i class="fas fa-calendar"></i> ${result.status === 'pending' ? 'Expected' : 'Published'}: ${formatDate(result.date)}</div>
                        </div>
                    </div>
                    <div class="result-body">
                        <p class="result-details">${result.description}</p>
                        ${statusBadge ? `<span class="status-badge ${statusClass}">${statusBadge}</span>` : ''}
                    </div>
                    <div class="result-footer">
                        <div class="date-info">
                            <i class="far fa-clock"></i> ${timeAgo(result.date)}
                        </div>
                        <button class="view-btn" data-link="${result.link || '#'}">
                            <i class="fas fa-eye"></i> Cheak
                        </button>
                    </div>
                `;
                
                container.appendChild(card);
            });
            
            // Add event listeners to view buttons
            document.querySelectorAll('.view-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const link = this.getAttribute('data-link');
                    if (link && link !== '#') {
                        window.open(link, '_blank');
                    }
                });
            });
        }

        // Filter results based on status
        function filterResults(filter) {
            if (filter === 'all') {
                return results;
            } else if (filter === 'declared') {
                return results.filter(result => result.status === 'out' || result.status === 'update');
            } else if (filter === 'pending') {
                return results.filter(result => result.status === 'pending');
            } 
            return results;
        }

        // Search results
        function searchResults(query) {
            if (!query) return results;
            
            const lowerQuery = query.toLowerCase();
            return results.filter(result => 
                result.title.toLowerCase().includes(lowerQuery) || 
                result.org.toLowerCase().includes(lowerQuery) ||
                result.description.toLowerCase().includes(lowerQuery)
            );
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', () => {
            // Initial render
            renderResults(results);
            
            // Filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.dataset.filter;
                    const filteredResults = filterResults(filter);
                    renderResults(filteredResults);
                });
            });
            
            // Search input
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim();
                const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
                let resultsToShow = results;
                
                if (query) {
                    resultsToShow = searchResults(query);
                }
                
                if (activeFilter !== 'all') {
                    resultsToShow = resultsToShow.filter(result => {
                        if (activeFilter === 'declared') {
                            return result.status === 'out' || result.status === 'update';
                        } else if (activeFilter === 'pending') {
                            return result.status === 'pending';
                        }
                        return true;
                    });
                }
                
                renderResults(resultsToShow);
            });
        });