'use client';

import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const data = {
  title: 'Create a Game',
  description:
    'This endpoint allows you to create a new game by sending basic game information like name, genre, and release date.',
  method: 'POST',
  endpoint: '/v1/games',
  model: [
    { name: 'name', type: 'string', description: 'Name of the game to create.' },
    { name: 'genre', type: 'string', description: 'Genre of the game.' },
    { name: 'release_date', type: 'string', description: 'Release date in ISO format.' },
    { name: 'developer', type: 'string', description: 'Developer or studio name.' },
  ],
  curl: `curl -X POST https://api.vembric.chat/v1/games \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Puzzle Hero",
    "genre": "Puzzle",
    "release_date": "2023-11-01",
    "developer": "Logic Labs"
  }'`,
  js: `await fetch("https://api.vembric.chat/v1/games", {
  method: "POST",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Puzzle Hero",
    genre: "Puzzle",
    release_date: "2023-11-01",
    developer: "Logic Labs",
  }),
});`,
  response: {
    id: 'game_xyz123',
    name: 'Puzzle Hero',
    genre: 'Puzzle',
    release_date: '2023-11-01',
    developer: 'Logic Labs',
    created_at: '2025-08-03T10:00:00Z',
  },
};

export default function CreateGamePage() {
  return (
    <ScrollArea className="p-6">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-muted-foreground max-w-3xl">{data.description}</p>

      <Separator className="my-6" />

      {/* Game Model */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Game Model</h2>
        <div className="space-y-4">
          {data.model.map((item) => (
            <div key={item.name}>
              <div className="flex items-center gap-2 font-mono font-medium">
                <Badge variant="outline" className="rounded-sm">{item.name}</Badge>
                <code className="text-xs text-muted-foreground">{item.type}</code>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-6" />

      {/* Endpoint */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 font-mono">
            {data.method}
          </Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{data.endpoint}</code>
        </div>
        <p className="text-muted-foreground mb-4">{data.description}</p>

        {/* Code Tabs */}
        <Tabs defaultValue="curl" className="w-full">
          <TabsList className="mb-2">
            <TabsTrigger value="curl">cURL</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
          </TabsList>
          <TabsContent value="curl">
            <SyntaxHighlighter language="bash" style={vscDarkPlus} wrapLongLines className="rounded-md text-sm">
              {data.curl}
            </SyntaxHighlighter>
          </TabsContent>
          <TabsContent value="js">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLongLines className="rounded-md text-sm">
              {data.js}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-6" />

      {/* Response */}
      <section>
        <h4 className="text-base font-medium mb-2">Sample Response</h4>
        <SyntaxHighlighter language="json" style={vscDarkPlus} wrapLongLines className="rounded-md text-sm">
          {JSON.stringify(data.response, null, 2)}
        </SyntaxHighlighter>
      </section>
    </ScrollArea>
  );
}
