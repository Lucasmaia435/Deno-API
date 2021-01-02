import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
import router from './router.ts';

const server = serve({ port: 8080 });

console.log(`[LOG] API running at: http://localhost:8080/`);


for await (const request of server) { 
  router(request);
}

