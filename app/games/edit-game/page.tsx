'use client';

import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const data = {
  title: 'Edit Game',
  description: 'This endpoint allows you to update the properties of an existing game.',
  method: 'PUT',
  endpoint: '/v1/games/:id',
  model: [
    {
      name: 'id',
      type: 'string (path param)',
      description: 'ID of the game to update.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Updated name of the game (optional).',
    },
    {
      name: 'genre',
      type: 'string',
      description: 'Updated genre of the game (optional).',
    },
    {
      name: 'release_date',
      type: 'string',
      description: 'Updated release date in ISO format (optional).',
    },
  ],
  curl: `curl -X PUT https://api.vembric.chat/v1/games/game_xyz123 \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Puzzle Hero Remastered",
    "release_date": "2024-01-15"
  }'`,
  js: `await fetch("https://api.vembric.chat/v1/games/game_xyz123", {
  method: "PUT",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Puzzle Hero Remastered",
    release_date: "2024-01-15",
  }),
});`,
  response: {
    id: 'game_xyz123',
    name: 'Puzzle Hero Remastered',
    genre: 'Puzzle',
    release_date: '2024-01-15',
    developer: 'Logic Labs',
    updated_at: '2025-08-03T12:00:00Z',
  },
};

export default function EditGamePage() {
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
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300 font-mono">
            {data.method}
          </Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{data.endpoint}</code>
        </div>
        <h3 className="text-lg font-semibold">Update an existing game</h3>
      </section>

      <Tabs defaultValue="curl" className="w-full mt-4">
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
