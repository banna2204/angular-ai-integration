import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideExperimentalWebMcpTools } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { UserService } from './user-service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideExperimentalWebMcpTools([
      {
        name: 'getCurrentProfile',
        description: 'Returns the current user profile overview, status, and subscription tier.',
        inputSchema: { 
          type: 'object', 
          properties: {} 
        },
        execute: async (args) => {
          const userService = inject(UserService);
          
          return {
            name: userService.currentUser().name,
          };
        }
      }
    ])
  ],
};
