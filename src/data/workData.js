// Sample work/agent project data with VIBRANT colors
// Replace with your actual projects

export const workProjects = [
    {
        id: 'agent-1',
        name: 'Neural Workflow Engine',
        description: 'An autonomous AI agent that orchestrates complex multi-step workflows using natural language commands. Integrates with 50+ tools and APIs to automate business processes end-to-end.',
        image: '/placeholder-neural.jpg',
        video: 'https://example.com/demo-neural.mp4',
        sandboxType: 'terminal',
        sandboxUrl: null,
        color: '#22d3ee', // Cyan
        personality: 'analytical'
    },
    {
        id: 'agent-2',
        name: 'Conversational AI Assistant',
        description: 'A context-aware chatbot powered by advanced LLMs. Handles customer support, lead qualification, and personalized recommendations with human-like understanding.',
        image: '/placeholder-chat.jpg',
        video: 'https://example.com/demo-chat.mp4',
        sandboxType: 'chat',
        sandboxUrl: 'https://atherai2026.app.n8n.cloud/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
        color: '#a78bfa', // Purple
        personality: 'friendly'
    },
    {
        id: 'agent-3',
        name: 'Data Pipeline Automator',
        description: 'Intelligent ETL agent that extracts, transforms, and loads data from multiple sources. Self-healing pipelines with anomaly detection and automatic error recovery.',
        image: '/placeholder-data.jpg',
        video: 'https://example.com/demo-data.mp4',
        sandboxType: 'terminal',
        sandboxUrl: null,
        color: '#10b981', // Emerald
        personality: 'precise'
    },
    {
        id: 'agent-4',
        name: 'Web Scraping Intelligence',
        description: 'Adaptive web scraper that learns page structures and handles dynamic content. Extracts structured data from any website with built-in proxy rotation and CAPTCHA solving.',
        image: '/placeholder-scraper.jpg',
        video: 'https://example.com/demo-scraper.mp4',
        sandboxType: 'iframe',
        sandboxUrl: 'https://example.com/scraper-demo',
        color: '#f59e0b', // Amber
        personality: 'adaptive'
    },
    {
        id: 'agent-5',
        name: 'Document Intelligence',
        description: 'AI-powered document processor that extracts insights from PDFs, images, and scanned documents. Supports OCR, entity extraction, and semantic search across your knowledge base.',
        image: '/placeholder-docs.jpg',
        video: 'https://example.com/demo-docs.mp4',
        sandboxType: 'chat',
        sandboxUrl: null,
        color: '#ec4899', // Pink
        personality: 'meticulous'
    },
    {
        id: 'agent-6',
        name: 'Social Media Orchestrator',
        description: 'Multi-platform social media agent that schedules posts, analyzes engagement, and generates content ideas. Uses AI to optimize posting times and hashtags for maximum reach.',
        image: '/placeholder-social.jpg',
        video: 'https://example.com/demo-social.mp4',
        sandboxType: 'iframe',
        sandboxUrl: 'https://example.com/social-demo',
        color: '#3b82f6', // Blue
        personality: 'creative'
    }
];

// Personality-based visual properties (not used for canvas anymore)
export const personalityTraits = {
    analytical: { speed: 0.5, size: 8, pulseRate: 2 },
    friendly: { speed: 0.8, size: 10, pulseRate: 1.5 },
    precise: { speed: 0.3, size: 6, pulseRate: 3 },
    adaptive: { speed: 1.2, size: 9, pulseRate: 1.8 },
    meticulous: { speed: 0.4, size: 7, pulseRate: 2.5 },
    creative: { speed: 1.0, size: 11, pulseRate: 1.2 }
};
