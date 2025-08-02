export default function Page() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold">Quick Start</h3>
              <p className="text-sm text-muted-foreground">
                Get up and running
              </p>
            </div>
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold">API Reference</h3>
              <p className="text-sm text-muted-foreground">Explore endpoints</p>
            </div>
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold">Examples</h3>
              <p className="text-sm text-muted-foreground">Code samples</p>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to Vembric</h1>
            <p className="text-xl text-muted-foreground">
              A beautiful template for API documentation
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Create stunning, developer-friendly API documentation with this
              modern Next.js template. Features include interactive examples,
              beautiful UI components, and responsive design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
