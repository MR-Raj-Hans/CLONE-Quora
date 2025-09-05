const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
    {
        id: "1a",
        username: "Advait",
        content: "This is a comprehensive guide to web development and modern frameworks. Let's explore React, Vue, and Angular in detail with practical examples.",
        category: "Technology",
        timestamp: new Date("2025-08-29T10:30:00"),
        views: 245,
        upvotes: 12,
        answers: 3,
        tags: ["web-development", "react", "vue", "angular"]
    },
    {
        id: "2b",
        username: "Anvika",
        content: "What are the best practices for learning programming as a beginner? I need some guidance on where to start and which languages to focus on first.",
        category: "Education",
        timestamp: new Date("2025-08-29T14:15:00"),
        views: 156,
        upvotes: 8,
        answers: 5,
        tags: ["programming", "beginner", "learning"]
    },
    {
        id: "3c",
        username: "Bhavish",
        content: "Let me know the next move in artificial intelligence and machine learning trends. What should we expect in 2025 and beyond?",
        category: "AI",
        timestamp: new Date("2025-08-30T09:45:00"),
        views: 189,
        upvotes: 15,
        answers: 2,
        tags: ["ai", "machine-learning", "trends"]
    },
    {
        id: "4d",
        username: "Aabheri",
        content: "What's the plan for tonight's coding bootcamp? Any specific topics we should focus on for full-stack development?",
        category: "Education",
        timestamp: new Date("2025-08-30T16:20:00"),
        views: 78,
        upvotes: 4,
        answers: 1,
        tags: ["bootcamp", "full-stack", "education"]
    },
    {
        id: "5e",
        username: "Ekansh",
        content: "Amazing insights about the future of web development and emerging technologies like WebAssembly, PWAs, and serverless architecture.",
        category: "Technology",
        timestamp: new Date("2025-08-30T18:10:00"),
        views: 134,
        upvotes: 9,
        answers: 4,
        tags: ["webassembly", "pwa", "serverless"]
    },
    {
        id: "6f",
        username: "Briti",
        content: "How does quantum computing work and what are its practical applications in today's world? Will it replace classical computing?",
        category: "Science",
        timestamp: new Date("2025-08-30T12:30:00"),
        views: 312,
        upvotes: 23,
        answers: 7,
        tags: ["quantum-computing", "physics", "technology"]
    },
    {
        id: "7g",
        username: "Gaurav",
        content: "Best data structures and algorithms to master for technical interviews. Here's my comprehensive guide after landing jobs at FAANG companies.",
        category: "Programming",
        timestamp: new Date("2025-08-30T08:15:00"),
        views: 445,
        upvotes: 35,
        answers: 12,
        tags: ["dsa", "interviews", "faang", "career"]
    },
    {
        id: "8h",
        username: "Faguni",
        content: "Climate change solutions through technology: How can AI, IoT, and renewable energy work together to save our planet?",
        category: "Science",
        timestamp: new Date("2025-08-29T20:45:00"),
        views: 278,
        upvotes: 18,
        answers: 6,
        tags: ["climate-change", "sustainability", "green-tech"]
    },
    {
        id: "9i",
        username: "Rishaan",
        content: "Complete roadmap for becoming a successful UX/UI designer in 2025. Tools, skills, and portfolio tips from industry experts.",
        category: "Design",
        timestamp: new Date("2025-08-30T11:00:00"),
        views: 189,
        upvotes: 14,
        answers: 8,
        tags: ["ux", "ui", "design", "career"]
    },
    {
        id: "10j",
        username: "Haarika",
        content: "Cryptocurrency and blockchain technology explained simply. Is it worth investing in 2025? What are the risks and opportunities?",
        category: "Finance",
        timestamp: new Date("2025-08-29T16:30:00"),
        views: 367,
        upvotes: 21,
        answers: 15,
        tags: ["crypto", "blockchain", "investment", "finance"]
    },
    {
        id: "11k",
        username: "Raahithya",
        content: "Mental health in tech industry: How to maintain work-life balance while working in high-stress environments. Personal experiences and tips.",
        category: "Health",
        timestamp: new Date("2025-08-30T14:20:00"),
        views: 156,
        upvotes: 27,
        answers: 9,
        tags: ["mental-health", "work-life-balance", "tech-industry"]
    },
    {
        id: "12l",
        username: "Misha",
        content: "Space exploration in 2025: Mars missions, space tourism, and the future of humanity among the stars. What's next for SpaceX and NASA?",
        category: "Science",
        timestamp: new Date("2025-08-30T07:45:00"),
        views: 298,
        upvotes: 31,
        answers: 11,
        tags: ["space", "mars", "spacex", "nasa"]
    },
    {
        id: "13m",
        username: "Samarth",
        content: "Cybersecurity threats in 2025: How to protect yourself and your business from emerging digital dangers. Best practices and tools.",
        category: "Security",
        timestamp: new Date("2025-08-29T13:10:00"),
        views: 234,
        upvotes: 19,
        answers: 6,
        tags: ["cybersecurity", "privacy", "security", "protection"]
    },
    {
        id: "14n",
        username: "zoya",
        content: "Electric vehicles revolution: Tesla vs competitors, charging infrastructure, and the future of sustainable transportation.",
        category: "Technology",
        timestamp: new Date("2025-08-30T15:30:00"),
        views: 187,
        upvotes: 16,
        answers: 4,
        tags: ["ev", "tesla", "sustainability", "transportation"]
    },
    {
        id: "15o",
        username: "Prayan",
        content: "Remote work productivity hacks: Tools, techniques, and mindset shifts that helped me become 3x more productive working from home.",
        category: "Productivity",
        timestamp: new Date("2025-08-30T10:15:00"),
        views: 223,
        upvotes: 25,
        answers: 13,
        tags: ["remote-work", "productivity", "wfh", "tips"]
    },
    {
        id: "16p",
        username: "Padmaja",
        content: "The art of meditation and mindfulness in modern life. How ancient practices can help us navigate today's digital chaos.",
        category: "Health",
        timestamp: new Date("2025-08-30T06:30:00"),
        views: 178,
        upvotes: 22,
        answers: 7,
        tags: ["meditation", "mindfulness", "spirituality", "wellness"]
    },
    {
        id: "17q",
        username: "Maahir",
        content: "Mastering the art of public speaking and presentation skills. From stage fright to confident delivery - a complete transformation guide.",
        category: "Education",
        timestamp: new Date("2025-08-29T19:15:00"),
        views: 267,
        upvotes: 18,
        answers: 10,
        tags: ["public-speaking", "presentation", "confidence", "skills"]
    },
    {
        id: "18r",
        username: "Raagavi",
        content: "The future of music and AI: How artificial intelligence is revolutionizing music creation, production, and the entire industry.",
        category: "AI",
        timestamp: new Date("2025-08-30T13:45:00"),
        views: 145,
        upvotes: 13,
        answers: 5,
        tags: ["music", "ai", "creativity", "industry"]
    },
    {
        id: "19s",
        username: "Saara",
        content: "Sustainable living in urban environments: Practical tips for reducing your carbon footprint while living in the city.",
        category: "Science",
        timestamp: new Date("2025-08-30T17:20:00"),
        views: 198,
        upvotes: 20,
        answers: 8,
        tags: ["sustainability", "urban-living", "environment", "green-lifestyle"]
    }
];

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    let { search, category, sort, tag } = req.query;
    let filteredPosts = [...posts];
    
    // Search functionality
    if (search) {
        filteredPosts = filteredPosts.filter(post => 
            post.content.toLowerCase().includes(search.toLowerCase()) ||
            post.username.toLowerCase().includes(search.toLowerCase()) ||
            post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
        );
    }
    
    // Category filter
    if (category && category !== 'All') {
        filteredPosts = filteredPosts.filter(post => post.category === category);
    }
    
    // Tag filter
    if (tag) {
        filteredPosts = filteredPosts.filter(post => post.tags.includes(tag));
    }
    
    // Sort functionality
    if (sort === 'newest') {
        filteredPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } else if (sort === 'popular') {
        filteredPosts.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sort === 'views') {
        filteredPosts.sort((a, b) => b.views - a.views);
    } else if (sort === 'answers') {
        filteredPosts.sort((a, b) => b.answers - a.answers);
    }
    
    const categories = ['All', ...new Set(posts.map(post => post.category))];
    const allTags = [...new Set(posts.flatMap(post => post.tags))].sort();
    const trendingPosts = posts.sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);
    
    res.render("index.ejs", { 
        posts: filteredPosts, 
        categories,
        allTags,
        trendingPosts,
        currentSearch: search || '',
        currentCategory: category || 'All',
        currentSort: sort || 'newest',
        currentTag: tag || ''
    });
});

app.get("/post/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts/", (req, res) => {
    let { username, content, category } = req.body;
    // Generate a unique id for each new post using uuid
    const id = uuidv4();
    
    // Extract tags from content (words with #)
    const tags = content.match(/#[\w-]+/g) || [];
    const cleanTags = tags.map(tag => tag.substring(1));
    
    const newPost = {
        id,
        username,
        content,
        category: category || 'General',
        timestamp: new Date(),
        views: 0,
        upvotes: 0,
        answers: 0,
        tags: cleanTags.length > 0 ? cleanTags : ['general']
    };
    posts.push(newPost);
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    
    // Increment views
    post.views += 1;
    
    res.render("show.ejs", { post: post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post: post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { username, content, category } = req.body;
    
    let postIndex = posts.findIndex(p => p.id === id);
    if (postIndex === -1) {
        return res.status(404).send("Post not found");
    }
    
    // Update the post with new data
    if (username) posts[postIndex].username = username;
    if (content) posts[postIndex].content = content;
    if (category) posts[postIndex].category = category;
    posts[postIndex].updatedAt = new Date();
    
    res.redirect(`/posts/${id}`);
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    
    let postIndex = posts.findIndex(p => p.id === id);
    if (postIndex === -1) {
        return res.status(404).send("Post not found");
    }
    
    // Remove the post from array
    posts.splice(postIndex, 1);
    res.redirect("/posts");
});

// Like/Unlike post
app.post("/posts/:id/like", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    
    if (post) {
        post.upvotes += 1;
    }
    
    res.json({ upvotes: post.upvotes });
});

// Bookmark post
app.post("/posts/:id/bookmark", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    
    if (post) {
        post.bookmarked = !post.bookmarked;
    }
    
    res.json({ bookmarked: post.bookmarked });
});

// Get trending posts
app.get("/api/trending", (req, res) => {
    const trending = posts
        .sort((a, b) => (b.views * 0.3 + b.upvotes * 0.7) - (a.views * 0.3 + a.upvotes * 0.7))
        .slice(0, 5);
    res.json(trending);
});

// Get post statistics
app.get("/api/stats", (req, res) => {
    const stats = {
        totalPosts: posts.length,
        totalUsers: new Set(posts.map(p => p.username)).size,
        totalViews: posts.reduce((sum, p) => sum + p.views, 0),
        totalUpvotes: posts.reduce((sum, p) => sum + p.upvotes, 0),
        popularCategory: posts.reduce((acc, post) => {
            acc[post.category] = (acc[post.category] || 0) + 1;
            return acc;
        }, {}),
        topTags: posts.flatMap(p => p.tags).reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {})
    };
    
    stats.mostPopularCategory = Object.keys(stats.popularCategory).reduce((a, b) => 
        stats.popularCategory[a] > stats.popularCategory[b] ? a : b
    );
    
    res.json(stats);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});