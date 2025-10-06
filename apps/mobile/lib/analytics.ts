import PostHog from 'posthog-react-native';

let posthog: PostHog | null = null;

export const analytics = {
  init: () => {
    try {
      posthog = new PostHog(process.env.EXPO_PUBLIC_POSTHOG_KEY || '', {
        host: process.env.EXPO_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      });
    } catch (e) {
      // noop
    }
  },
  capture: (event: string, properties?: Record<string, any>) => {
    posthog?.capture(event, properties);
  },
  identify: (userId: string, properties?: Record<string, any>) => {
    posthog?.identify(userId, properties);
  },
  reset: () => posthog?.reset(),
};

export default analytics;
