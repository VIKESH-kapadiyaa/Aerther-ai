import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock data since we can't import the React component data directly in Node environment easily without babel
// In a real Next.js app, this would use the actual data source
const projects = [
    { id: 'agent-1', name: 'Neural Workflow Engine' },
    { id: 'agent-2', name: 'Conversational AI Assistant' },
    { id: 'agent-3', name: 'Data Pipeline Automator' },
    { id: 'agent-4', name: 'Web Scraping Intelligence' },
    { id: 'agent-5', name: 'Document Intelligence' },
    { id: 'agent-6', name: 'Social Media Orchestrator' }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
    const baseUrl = 'https://aether-ai.com';
    const date = new Date().toISOString();

    const staticPages = [
        '',
        '#work',
        '#process',
        '#pricing',
        '#contact'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Static Pages -->
    ${staticPages.map(page => `
    <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}

    <!-- Dynamic Work Pages -->
    ${projects.map(project => `
    <url>
        <loc>${baseUrl}/work/${project.id}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join('')}
</urlset>`;

    const publicDir = path.join(__dirname, '../public');

    // Ensure public dir exists
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
