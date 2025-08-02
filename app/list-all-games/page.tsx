'use client';

import { listAllGamesApiData as data } from './list-all-games-api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ListAllGamesPage() {
  return (
    <ScrollArea className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-muted-foreground max-w-3xl">{data.description}</p>

      <Separator className="my-6" />

      {/* Contact Model */}
      <section>
        <h2 className="text-xl font-semibold mb-4">The Game Model</h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The game model defines each game’s core attributes: ID, name, genre, release date, and the developer behind it.
        </p>

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
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 font-mono">GET</Badge>
          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{data.endpoint}</code>
        </div>
        <h3 className="text-lg font-semibold">List all games</h3>
        <p className="text-muted-foreground mb-4">{data.description}</p>

        {/* Optional Attributes */}
        <div className="mb-6">
          <h4 className="font-medium text-base mb-2">Optional Attributes</h4>
          <ul className="list-disc list-inside space-y-1">
            {data.optionalAttributes.map((attr) => (
              <li key={attr.name}>
                <span className="font-medium">{attr.name}</span>{' '}
                <code className="text-sm text-muted-foreground">({attr.type})</code>: {attr.description}
              </li>
            ))}
          </ul>
        </div>

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

      {/* Sample Response */}
      <section>
        <h4 className="text-base font-medium mb-2">Response</h4>
        <SyntaxHighlighter language="json" style={vscDarkPlus} wrapLongLines className="rounded-md text-sm">
          {JSON.stringify(data.response, null, 2)}
        </SyntaxHighlighter>
      </section>
    </ScrollArea>
  );
}
