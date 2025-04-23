import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const reports = [
  {
    id: 1,
    title: "The Growing Need for Skill Development in Today's Job Market",
    description:
      "This report discusses the increasing demand for skill development in the modern job market, driven by technological advancements and changing economic landscapes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LyYFYMemkRO_G4Lc9mQSygeLfwP1482KHg&s",
    link: "https://www.weforum.org/reports/the-future-of-jobs-report-2020",
    sources: [
      "World Economic Forum. (2020). The Future of Jobs Report 2020.",
      "McKinsey & Company. (2018). Jobs lost, jobs gained: What the future of work will mean for jobs, skills, and wages.",
    ],
    category: "Career Development",
  },
  {
    id: 2,
    title:
      "The Impact of E-Learning on Career Growth and Professional Development",
    description:
      "This report explores how e-learning is reshaping career growth, employee retention, and the way professionals are upskilling themselves in a digital-first world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLZIVRZqDx8HaGX4lTJ2otlT-CCD7oAox_A&s",
    link: "https://www.educause.edu/research-and-publications/reports/2020/the-future-of-learning-e-learning-trends-and-opportunities",
    sources: [
      "Educause Review. (2020). The Future of Learning: E-learning Trends and Opportunities.",
      "eLearning Industry. (2021). How E-Learning Contributes To Career Development And Employee Retention.",
    ],
    category: "E-Learning",
  },
  {
    id: 3,
    title: "How NextSkill is Helping Bridge the Skill Gap in [Industry/Field]",
    description:
      "This report focuses on how NextSkill is addressing the skills gap through targeted learning and upskilling programs in the [Industry/Field] sector.",
    image:
      "https://koala.sh/api/image/v2-lipc2-eay9o.jpg?width=1216&height=832&dream",
    link: "https://www.linkedin.com/learning",
    sources: [
      "LinkedIn Learning. (2020). The Most In-Demand Skills of 2020.",
      "FutureLearn. (2021). Upskilling and Reskilling for the Future of Work.",
    ],
    category: "Skills Gap",
  },
  {
    id: 4,
    title:
      "AI and Machine Learning in Skill Development: The Future of Personalized Learning",
    description:
      "Explore how artificial intelligence and machine learning are transforming skill development, personalizing learning experiences for individuals.",
    image:
      "https://koala.sh/api/image/v2-c18sl-c4r1d.jpg?width=1216&height=832&dream",
    link: "https://www.edtechmagazine.com",
    sources: [
      "EdTech Magazine. (2021). How Artificial Intelligence is Transforming Personalized Learning.",
      "Forbes. (2020). AI's Role In The Future Of Learning.",
    ],
    category: "AI & Technology",
  },
  {
    id: 5,
    title:
      "The Role of Soft Skills in Career Advancement and How to Develop Them",
    description:
      "Learn about the importance of soft skills such as communication, leadership, and teamwork, and strategies for improving these skills to advance your career.",
    image:
      "https://www.rosemet.com/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-07-05.59.20-A-dynamic-virtual-meeting-room-where-team-members-from-different-locations-are-engaged-in-seamless-collaboration.-The-scene-shows-shared-digital-tools.webp",
    link: "https://www.hbr.org",
    sources: [
      "Harvard Business Review. (2018). The Skills Leaders Need at Every Level.",
      "World Economic Forum. (2020). The Future of Jobs Report 2020.",
    ],
    category: "Soft Skills",
  },
  {
    id: 6,
    title:
      "How to Make the Most of Your Online Learning Experience: Tips and Tricks",
    description:
      "This report offers actionable tips and strategies to enhance your online learning experience and ensure success in virtual classrooms.",
    image:
      "https://researchleap.com/wp-content/uploads/2021/03/communication-in-online-classroom.jpg",
    link: "https://www.forbes.com/online-learning-tips",
    sources: [
      "Forbes. (2021). 10 Tips To Make The Most Of Online Learning.",
      "Coursera. (2020). 7 Tips for Successful Online Learning.",
    ],
    category: "Learning Tips",
  },
  {
    id: 7,
    title:
      "The Evolution of Career Development Platforms: From Traditional to Tech-Driven",
    description:
      "This report examines the shift from traditional career development methods to modern, tech-driven platforms, and how these innovations are shaping the job market.",
    image:
      "https://digital.genpi.co/wp-content/uploads/2024/08/41-Online-Collaboration-Tools-to-Help-Your-Team-Be-More-Productive.jpg",
    link: "https://www.linkedin.com/talent/blog",
    sources: [
      "LinkedIn Talent Blog. (2020). The Future of Work: What You Need to Know.",
      "McKinsey & Company. (2021). How COVID-19 has changed the job market forever.",
    ],
    category: "Career Platforms",
  },
];

const ReportPage = () => {
  const navigate = useNavigate();
  const [visibleReports, setVisibleReports] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(reports.map((report) => report.category)),
  ];

  // Animation effect for cards appearing gradually
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleReports(reports);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Filter reports based on category and search term
  const filteredReports = reports.filter((report) => {
    const matchesCategory =
      selectedCategory === "All" || report.category === selectedCategory;
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBackButtonClick = () => {
    navigate("/user/feeds");
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.pageTitle}>Knowledge Reports</h1>
        <p style={styles.heroText}>
          Explore our comprehensive collection of industry insights and career
          development resources on NextSkill
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div style={styles.filterContainer}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search reports..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div style={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category ? styles.activeCategory : {}),
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <button
        style={styles.backButton}
        onClick={handleBackButtonClick}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        <span style={styles.backButtonIcon}>&#8592;</span> Back to Feeds
      </button>

      {/* Reports Grid with Animation */}
      <div style={styles.reportsList}>
        {filteredReports.map((report, index) => (
          <div
            key={report.id}
            style={{
              ...styles.reportCard,
              ...(hoveredCard === report.id ? styles.reportCardHover : {}),
              opacity: visibleReports.includes(report) ? 1 : 0,
              transform: visibleReports.includes(report)
                ? hoveredCard === report.id
                  ? "translateY(-10px) scale(1.03)"
                  : "translateY(0) scale(1)"
                : "translateY(20px)",
              transition: `all 0.4s ease-in-out ${index * 0.1}s`,
            }}
            onMouseEnter={() => setHoveredCard(report.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.reportImageContainer}>
              <img
                src={report.image}
                alt={report.title}
                style={styles.reportImage}
              />
              <div style={styles.categoryBadge}>{report.category}</div>
            </div>
            <div style={styles.reportDetails}>
              <h2 style={styles.reportTitle}>{report.title}</h2>
              <p style={styles.reportDescription}>{report.description}</p>
              <div style={styles.reportFooter}>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.reportLink,
                    ...(hoveredCard === report.id
                      ? styles.reportLinkHover
                      : {}),
                  }}
                >
                  Read Full Report <span style={styles.arrowIcon}>→</span>
                </a>
              </div>
              <div style={styles.sourcesContainer}>
                <h4 style={styles.sourcesTitle}>Sources</h4>
                <ul style={styles.sourcesList}>
                  {report.sources.map((source, index) => (
                    <li key={index} style={styles.sourceItem}>
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredReports.length === 0 && (
        <div style={styles.noResults}>
          <h3>No reports found matching your search criteria.</h3>
          <p>Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

// Enhanced styles with more modern design and animation support
const styles = {
  container: {
    padding: "10",
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heroSection: {
    background: "linear-gradient(135deg, #0062cc 0%, #0096ff 100%)",
    padding: "60px 20px",
    color: "white",
    textAlign: "center",
    marginBottom: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  pageTitle: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "15px",
    letterSpacing: "1px",
    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  heroText: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto",
    opacity: "0.9",
  },
  filterContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    margin: "0 auto 30px auto",
    padding: "0 20px",
    maxWidth: "1200px",
  },
  searchBar: {
    width: "100%",
    maxWidth: "600px",
  },
  searchInput: {
    width: "100%",
    padding: "12px 20px",
    fontSize: "16px",
    border: "1px solid #e0e0e0",
    borderRadius: "30px",
    outline: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
  },
  categoryFilters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  categoryButton: {
    padding: "8px 16px",
    background: "#f0f0f0",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#555",
    transition: "all 0.3s ease",
  },
  activeCategory: {
    background: "#007bff",
    color: "white",
    boxShadow: "0 2px 4px rgba(0,123,255,0.3)",
  },
  reportsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "30px",
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto 60px auto",
  },
  reportCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  reportCardHover: {
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
  },
  reportImageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  reportImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  categoryBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "rgba(0,123,255,0.9)",
    color: "white",
    padding: "5px 12px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  reportDetails: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  reportTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "12px",
    lineHeight: "1.3",
  },
  reportDescription: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "20px",
    lineHeight: "1.5",
    flexGrow: 1,
  },
  reportFooter: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #f0f0f0",
    paddingTop: "15px",
  },
  reportLink: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  reportLinkHover: {
    color: "#0056b3",
  },
  arrowIcon: {
    marginLeft: "5px",
    transition: "transform 0.3s ease",
  },
  sourcesContainer: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  sourcesTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    marginBottom: "8px",
  },
  sourcesList: {
    margin: "0",
    padding: "0",
    listStyle: "none",
  },
  sourceItem: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "5px",
    lineHeight: "1.4",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto 30px auto",
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
    maxWidth: "1200px",
  },
  backButtonIcon: {
    marginRight: "8px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  noResults: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#666",
  },
  newsletterSection: {
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)",
    padding: "60px 20px",
    textAlign: "center",
    borderTop: "1px solid #e0e0e0",
  },
  newsletterTitle: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },
  newsletterText: {
    fontSize: "16px",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 25px auto",
  },
};

export default ReportPage;
