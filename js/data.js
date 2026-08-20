/* ============================================================
   Raasta — Mock data (simulates API response).
   Bilingual: courses.hi (Hinglish) / courses.en (English).
   Language I18N.lang se choose hota hai.
   ============================================================ */
window.DATA = {
  courses: {
    hi: {
      "B.Com": {
        goal: "Data Analyst",
        careers: [
          {
            rank: 1,
            title: "Data Analyst",
            rationale: "Tumhara B.Com + Excel base solid hai. SQL aur Power BI add karte hi data storytelling ka raasta kholta hai.",
            score: 87
          },
          {
            rank: 2,
            title: "Business Analyst",
            rationale: "Communication aur accounts ka logic ready hai. Process mapping aur requirement gathering pe focus karna padega.",
            score: 74
          },
          {
            rank: 3,
            title: "Financial Analyst",
            rationale: "Accounts ka jhol samjha hua hai, par financial modelling aur forecasting tools naye hain — thoda time lagega.",
            score: 63
          }
        ],
        skills: {
          current: [
            { name: "Excel & Pivot Tables", level: 88 },
            { name: "Accounts Basics", level: 74 },
            { name: "Communication", level: 80 },
            { name: "Mathematical Reasoning", level: 62 }
          ],
          target: [
            { name: "SQL (Queries & Joins)", level: 8 },
            { name: "Power BI Dashboards", level: 4 },
            { name: "Python / Data Cleaning", level: 10 },
            { name: "Statistics Fundamentals", level: 22 }
          ]
        },
        gap: {
          percentage: 58,
          timelineMonths: 9,
          summary: "Overall skills ka gap ~58% hai. Excel ke alawa core data tools (SQL, Power BI, Python) abhi nahi hain, lekin accounts aur math ka base is gap ko jaldi close kar sakta hai."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Com (2nd year) + Excel fundamentals + basic accounts. Yeh tumhara starting point hai.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Excel Pro → Dashboards", desc: "Power Query, slicers aur dynamic dashboards banana seekho. Pehla mini-project banao.", duration: "2 months" },
          { type: "mid", stage: "Milestone 2", title: "SQL + Data Cleaning", desc: "SELECT, JOINs, aggregations — real datasets pe practice karo aur dirty data clean karna sikho.", duration: "3 months" },
          { type: "mid", stage: "Milestone 3", title: "Power BI + Portfolio", desc: "End-to-end Power BI report banake 3 case studies apne portfolio mein daalo.", duration: "2 months" },
          { type: "mid", stage: "Milestone 4", title: "Interviews + Capstone", desc: "Mock interviews, resume building, aur ek capstone project jo recruiter ko impress kare.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Data Analyst — job ready", desc: "9 mahine ke andar mid-level Data Analyst roles ke liye confident aur interview-ready.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "SQL for Data Analysis", meta: "Coursera · Free audit · 8 weeks / ~25 hrs", url: "https://www.coursera.org/" },
          { index: "02", name: "Power BI: Zero to Dashboard", meta: "YouTube · Free · Hindi + English · ~12 hrs", url: "https://www.youtube.com/" },
          { index: "03", name: "Data Analyst Portfolio Guide", meta: "Notion template · Free · Self-paced", url: "https://www.notion.com/" },
          { index: "04", name: "Statistics 101 for Analysts", meta: "Khan Academy · Free · ~15 hrs", url: "https://www.khanacademy.org/" },
          { index: "05", name: "Mock Interview Circle", meta: "Community · Live sessions · ₹0–500", url: "https://www.meetup.com/" }
        ],
        mentor: {
          name: "Aarav Sharma",
          role: "Senior Data Analyst @ fintech startup · ex-TCS",
          tags: ["Shared Language: Hinglish", "Excel → Analytics switch", "Portfolio reviews"],
          action: "Request Introduction"
        }
      },

      "B.Tech": {
        goal: "Full Stack Developer",
        careers: [
          {
            rank: 1,
            title: "Full Stack Developer",
            rationale: "Tumhara programming ka base ready hai. React + Node + databases ek saath mila ke end-to-end apps ban sakte hain.",
            score: 92
          },
          {
            rank: 2,
            title: "Frontend Engineer",
            rationale: "JavaScript aur UI logic strong hai. HTML/CSS/React pe aur depth banao, phir UI framework ke saath polish.",
            score: 85
          },
          {
            rank: 3,
            title: "DevOps / Backend Engineer",
            rationale: "Systems aur logic samajh aata hai, par Docker, AWS aur API design pe kaam karna padega.",
            score: 70
          }
        ],
        skills: {
          current: [
            { name: "Programming (C++ / Java)", level: 80 },
            { name: "Data Structures & Algorithms", level: 68 },
            { name: "Web Basics (HTML/CSS/JS)", level: 45 },
            { name: "Database Fundamentals", level: 30 }
          ],
          target: [
            { name: "React / Frontend Framework", level: 10 },
            { name: "Node.js & Express (Backend)", level: 8 },
            { name: "SQL + NoSQL (PostgreSQL/Mongo)", level: 15 },
            { name: "System Design & Deployment", level: 6 }
          ]
        },
        gap: {
          percentage: 45,
          timelineMonths: 12,
          summary: "Programming ka solid base hai, par full-stack ke missing pieces — frontend framework, backend, databases aur deployment — yeh 12 mahine ka gap hai. DSA strong hai, isliye learning fast hogi."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Tech (CSE/IT) + strong programming aur DSA fundamentals. Yeh tumhara launchpad hai.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Git, CLI + Modern JS", desc: "Version control, terminal aur ES6+ (async/await, modules) pe command pakka karo.", duration: "1.5 months" },
          { type: "mid", stage: "Milestone 2", title: "Frontend: React Mastery", desc: "Components, hooks, state management — 2-3 interactive projects banao (todo, dashboard, e-commerce UI).", duration: "3 months" },
          { type: "mid", stage: "Milestone 3", title: "Backend: Node + Databases", desc: "Express REST APIs, authentication, PostgreSQL + MongoDB — ek full CRUD app deploy karo.", duration: "3 months" },
          { type: "mid", stage: "Milestone 4", title: "Deployment + System Design", desc: "Docker, CI/CD, AWS basics aur system design ke core concepts — portfolio pe 2-3 full-stack projects.", duration: "2.5 months" },
          { type: "mid", stage: "Milestone 5", title: "DSA + Interview Prep", desc: "LeetCode (Medium) grind + mock system design aur behavioural interviews.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Full Stack Developer — job ready", desc: "12 mahine mein SDE / Full Stack roles ke liye strong portfolio aur interview-ready.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "The Odin Project — Full Stack", meta: "Free · Self-paced · ~250 hrs", url: "https://www.theodinproject.com/" },
          { index: "02", name: "React 18 Complete Guide", meta: "YouTube + Docs · Free · ~20 hrs", url: "https://www.youtube.com/" },
          { index: "03", name: "Node.js & Express Bootcamp", meta: "Udemy · ₹499 · 40 hrs", url: "https://www.udemy.com/" },
          { index: "04", name: "SQL & NoSQL for Devs", meta: "freeCodeCamp · Free · ~15 hrs", url: "https://www.freecodecamp.org/" },
          { index: "05", name: "System Design Primer", meta: "GitHub · Free · Self-paced", url: "https://github.com/donnemartin/system-design-primer" }
        ],
        mentor: {
          name: "Priya Verma",
          role: "Senior Full Stack Engineer @ fintech · ex-Zomato",
          tags: ["Shared Language: Hinglish", "Frontend + Backend", "Interview mocks"],
          action: "Request Introduction"
        }
      },

      "B.Pharma": {
        goal: "Pharmacovigilance / Drug Safety",
        careers: [
          {
            rank: 1,
            title: "Pharmacovigilance Analyst",
            rationale: "Pharma ka base strong hai; ADR reporting, ICSR aur drug safety databases pe focus karte hi yeh role fit hoga.",
            score: 88
          },
          {
            rank: 2,
            title: "Clinical Research Associate",
            rationale: "ICH-GCP aur clinical trials ka samajh chahiye — B.Pharma degree iska solid starting point hai.",
            score: 81
          },
          {
            rank: 3,
            title: "Regulatory Affairs Officer",
            rationale: "CDSCO/FDA documentation ka game hai — pharma knowledge + legal/regulatory mix se yeh role banega.",
            score: 66
          }
        ],
        skills: {
          current: [
            { name: "Pharmacology Basics", level: 82 },
            { name: "Chemistry & Pharma Knowledge", level: 75 },
            { name: "Lab & Analytical Skills", level: 70 },
            { name: "Medical Terminology", level: 60 }
          ],
          target: [
            { name: "Pharmacovigilance (ADR/ICSR)", level: 8 },
            { name: "Clinical Data Management (Argus/medDRA)", level: 5 },
            { name: "Regulatory Docs (CDSCO/FDA)", level: 12 },
            { name: "Biostatistics Fundamentals", level: 20 }
          ]
        },
        gap: {
          percentage: 52,
          timelineMonths: 8,
          summary: "Pharma degree aur lab exposure already strong hai, par pharmacovigilance tools, regulatory documentation aur biostatistics ka gap hai — roughly 8 mahine ka structured path."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Pharma + pharmacology aur lab exposure. Yeh tumhara clinical/pharma base hai.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Pharmacovigilance Foundations", desc: "ADR detection, ICSR processing, signal detection aur WHO safety reporting ka core samjho.", duration: "2 months" },
          { type: "mid", stage: "Milestone 2", title: "Clinical Data Management", desc: "Argus aur medDRA coding ki practice — real case-based ADR forms banao.", duration: "2 months" },
          { type: "mid", stage: "Milestone 3", title: "Regulatory & Compliance", desc: "CDSCO/FDA formats, ICH-GCP guidelines aur audit readiness ka practical knowledge.", duration: "2 months" },
          { type: "mid", stage: "Milestone 4", title: "Capstone + Interview Prep", desc: "Ek complete PV case study report, mock interviews aur pharma resume building.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Pharmacovigilance Analyst — job ready", desc: "8 mahine mein drug safety / PV roles ke liye confident aur industry-ready.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "Pharmacovigilance Certification", meta: "Coursera · Paid ₹2,800 · 6 weeks", url: "https://www.coursera.org/" },
          { index: "02", name: "ICH-GCP & WHO PV Guidelines", meta: "PDF / self-study · Free", url: "https://ichgcp.net/" },
          { index: "03", name: "Argus + medDRA Tutorials", meta: "YouTube · Free · ~10 hrs", url: "https://www.youtube.com/" },
          { index: "04", name: "Clinical Research Complete Roadmap", meta: "Hindi + English · YouTube · Free", url: "https://www.youtube.com/" },
          { index: "05", name: "CDSCO Regulatory Affairs Course", meta: "CIOML / Swayam · Free–₹1,000", url: "https://swayam.gov.in/" }
        ],
        mentor: {
          name: "Dr. Neha Gupta",
          role: "Pharmacovigilance Lead @ pharma MNC",
          tags: ["Shared Language: Hinglish", "Regulatory (CDSCO/FDA)", "Pharma freshers"],
          action: "Request Introduction"
        }
      }
    },

    en: {
      "B.Com": {
        goal: "Data Analyst",
        careers: [
          {
            rank: 1,
            title: "Data Analyst",
            rationale: "Your B.Com + Excel foundation is solid. Adding SQL and Power BI opens the door to data storytelling.",
            score: 87
          },
          {
            rank: 2,
            title: "Business Analyst",
            rationale: "Your communication and accounting logic are ready. Focus on process mapping and requirement gathering.",
            score: 74
          },
          {
            rank: 3,
            title: "Financial Analyst",
            rationale: "You understand accounts well, but financial modelling and forecasting tools are new — it will take some time.",
            score: 63
          }
        ],
        skills: {
          current: [
            { name: "Excel & Pivot Tables", level: 88 },
            { name: "Accounting Basics", level: 74 },
            { name: "Communication", level: 80 },
            { name: "Mathematical Reasoning", level: 62 }
          ],
          target: [
            { name: "SQL (Queries & Joins)", level: 8 },
            { name: "Power BI Dashboards", level: 4 },
            { name: "Python / Data Cleaning", level: 10 },
            { name: "Statistics Fundamentals", level: 22 }
          ]
        },
        gap: {
          percentage: 58,
          timelineMonths: 9,
          summary: "The overall skills gap is ~58%. Beyond Excel, core data tools (SQL, Power BI, Python) are still missing, but your accounting and math base can close this gap quickly."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Com (2nd year) + Excel fundamentals + basic accounting. This is your starting point.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Excel Pro → Dashboards", desc: "Learn Power Query, slicers and dynamic dashboards. Build your first mini-project.", duration: "2 months" },
          { type: "mid", stage: "Milestone 2", title: "SQL + Data Cleaning", desc: "SELECT, JOINs, aggregations — practice on real datasets and learn to clean messy data.", duration: "3 months" },
          { type: "mid", stage: "Milestone 3", title: "Power BI + Portfolio", desc: "Build an end-to-end Power BI report and add 3 case studies to your portfolio.", duration: "2 months" },
          { type: "mid", stage: "Milestone 4", title: "Interviews + Capstone", desc: "Mock interviews, resume building, and a capstone project that impresses recruiters.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Data Analyst — job ready", desc: "Confident and interview-ready for mid-level Data Analyst roles within 9 months.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "SQL for Data Analysis", meta: "Coursera · Free audit · 8 weeks / ~25 hrs", url: "https://www.coursera.org/" },
          { index: "02", name: "Power BI: Zero to Dashboard", meta: "YouTube · Free · Hindi + English · ~12 hrs", url: "https://www.youtube.com/" },
          { index: "03", name: "Data Analyst Portfolio Guide", meta: "Notion template · Free · Self-paced", url: "https://www.notion.com/" },
          { index: "04", name: "Statistics 101 for Analysts", meta: "Khan Academy · Free · ~15 hrs", url: "https://www.khanacademy.org/" },
          { index: "05", name: "Mock Interview Circle", meta: "Community · Live sessions · ₹0–500", url: "https://www.meetup.com/" }
        ],
        mentor: {
          name: "Aarav Sharma",
          role: "Senior Data Analyst @ fintech startup · ex-TCS",
          tags: ["Shared Language: Hinglish", "Excel → Analytics switch", "Portfolio reviews"],
          action: "Request Introduction"
        }
      },

      "B.Tech": {
        goal: "Full Stack Developer",
        careers: [
          {
            rank: 1,
            title: "Full Stack Developer",
            rationale: "Your programming foundation is ready. Combine React + Node + databases to build end-to-end apps.",
            score: 92
          },
          {
            rank: 2,
            title: "Frontend Engineer",
            rationale: "JavaScript and UI logic are strong. Go deeper on HTML/CSS/React, then polish with a UI framework.",
            score: 85
          },
          {
            rank: 3,
            title: "DevOps / Backend Engineer",
            rationale: "Systems and logic make sense, but you'll need to work on Docker, AWS and API design.",
            score: 70
          }
        ],
        skills: {
          current: [
            { name: "Programming (C++ / Java)", level: 80 },
            { name: "Data Structures & Algorithms", level: 68 },
            { name: "Web Basics (HTML/CSS/JS)", level: 45 },
            { name: "Database Fundamentals", level: 30 }
          ],
          target: [
            { name: "React / Frontend Framework", level: 10 },
            { name: "Node.js & Express (Backend)", level: 8 },
            { name: "SQL + NoSQL (PostgreSQL/Mongo)", level: 15 },
            { name: "System Design & Deployment", level: 6 }
          ]
        },
        gap: {
          percentage: 45,
          timelineMonths: 12,
          summary: "You have a solid programming base, but the full-stack missing pieces — frontend framework, backend, databases and deployment — make up a 12-month gap. Strong DSA means learning will be fast."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Tech (CSE/IT) + strong programming and DSA fundamentals. This is your launchpad.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Git, CLI + Modern JS", desc: "Master version control, the terminal and ES6+ (async/await, modules).", duration: "1.5 months" },
          { type: "mid", stage: "Milestone 2", title: "Frontend: React Mastery", desc: "Components, hooks, state management — build 2-3 interactive projects (todo, dashboard, e-commerce UI).", duration: "3 months" },
          { type: "mid", stage: "Milestone 3", title: "Backend: Node + Databases", desc: "Express REST APIs, authentication, PostgreSQL + MongoDB — deploy one full CRUD app.", duration: "3 months" },
          { type: "mid", stage: "Milestone 4", title: "Deployment + System Design", desc: "Docker, CI/CD, AWS basics and core system design concepts — 2-3 full-stack projects on your portfolio.", duration: "2.5 months" },
          { type: "mid", stage: "Milestone 5", title: "DSA + Interview Prep", desc: "LeetCode (Medium) grind + mock system design and behavioural interviews.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Full Stack Developer — job ready", desc: "A strong portfolio and interview-ready for SDE / Full Stack roles within 12 months.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "The Odin Project — Full Stack", meta: "Free · Self-paced · ~250 hrs", url: "https://www.theodinproject.com/" },
          { index: "02", name: "React 18 Complete Guide", meta: "YouTube + Docs · Free · ~20 hrs", url: "https://www.youtube.com/" },
          { index: "03", name: "Node.js & Express Bootcamp", meta: "Udemy · ₹499 · 40 hrs", url: "https://www.udemy.com/" },
          { index: "04", name: "SQL & NoSQL for Devs", meta: "freeCodeCamp · Free · ~15 hrs", url: "https://www.freecodecamp.org/" },
          { index: "05", name: "System Design Primer", meta: "GitHub · Free · Self-paced", url: "https://github.com/donnemartin/system-design-primer" }
        ],
        mentor: {
          name: "Priya Verma",
          role: "Senior Full Stack Engineer @ fintech · ex-Zomato",
          tags: ["Shared Language: Hinglish", "Frontend + Backend", "Interview mocks"],
          action: "Request Introduction"
        }
      },

      "B.Pharma": {
        goal: "Pharmacovigilance / Drug Safety",
        careers: [
          {
            rank: 1,
            title: "Pharmacovigilance Analyst",
            rationale: "Your pharma base is strong; focus on ADR reporting, ICSR and drug safety databases and this role fits.",
            score: 88
          },
          {
            rank: 2,
            title: "Clinical Research Associate",
            rationale: "You need ICH-GCP and clinical trials knowledge — a B.Pharma degree is a solid starting point.",
            score: 81
          },
          {
            rank: 3,
            title: "Regulatory Affairs Officer",
            rationale: "CDSCO/FDA documentation is the game — a mix of pharma knowledge and regulatory know-how builds this role.",
            score: 66
          }
        ],
        skills: {
          current: [
            { name: "Pharmacology Basics", level: 82 },
            { name: "Chemistry & Pharma Knowledge", level: 75 },
            { name: "Lab & Analytical Skills", level: 70 },
            { name: "Medical Terminology", level: 60 }
          ],
          target: [
            { name: "Pharmacovigilance (ADR/ICSR)", level: 8 },
            { name: "Clinical Data Management (Argus/medDRA)", level: 5 },
            { name: "Regulatory Docs (CDSCO/FDA)", level: 12 },
            { name: "Biostatistics Fundamentals", level: 20 }
          ]
        },
        gap: {
          percentage: 52,
          timelineMonths: 8,
          summary: "Your pharma degree and lab exposure are already strong, but pharmacovigilance tools, regulatory documentation and biostatistics create a gap — roughly an 8-month structured path."
        },
        roadmap: [
          { type: "done", stage: "Baseline", title: "Current profile locked", desc: "B.Pharma + pharmacology and lab exposure. This is your clinical/pharma base.", duration: "Done" },
          { type: "mid", stage: "Milestone 1", title: "Pharmacovigilance Foundations", desc: "Understand ADR detection, ICSR processing, signal detection and WHO safety reporting.", duration: "2 months" },
          { type: "mid", stage: "Milestone 2", title: "Clinical Data Management", desc: "Practice Argus and medDRA coding — build real case-based ADR forms.", duration: "2 months" },
          { type: "mid", stage: "Milestone 3", title: "Regulatory & Compliance", desc: "Practical knowledge of CDSCO/FDA formats, ICH-GCP guidelines and audit readiness.", duration: "2 months" },
          { type: "mid", stage: "Milestone 4", title: "Capstone + Interview Prep", desc: "A complete PV case-study report, mock interviews and pharma resume building.", duration: "2 months" },
          { type: "goal", stage: "Goal", title: "Pharmacovigilance Analyst — job ready", desc: "Confident and industry-ready for drug safety / PV roles within 8 months.", duration: "Target reached" }
        ],
        resources: [
          { index: "01", name: "Pharmacovigilance Certification", meta: "Coursera · Paid ₹2,800 · 6 weeks", url: "https://www.coursera.org/" },
          { index: "02", name: "ICH-GCP & WHO PV Guidelines", meta: "PDF / self-study · Free", url: "https://ichgcp.net/" },
          { index: "03", name: "Argus + medDRA Tutorials", meta: "YouTube · Free · ~10 hrs", url: "https://www.youtube.com/" },
          { index: "04", name: "Clinical Research Complete Roadmap", meta: "Hindi + English · YouTube · Free", url: "https://www.youtube.com/" },
          { index: "05", name: "CDSCO Regulatory Affairs Course", meta: "CIOML / Swayam · Free–₹1,000", url: "https://swayam.gov.in/" }
        ],
        mentor: {
          name: "Dr. Neha Gupta",
          role: "Pharmacovigilance Lead @ pharma MNC",
          tags: ["Shared Language: Hinglish", "Regulatory (CDSCO/FDA)", "Pharma freshers"],
          action: "Request Introduction"
        }
      }
    }
  }
};