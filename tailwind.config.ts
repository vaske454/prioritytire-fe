const config: {
  plugins: any[];
  theme: {
    extend: {
      top: { "1/2-42": string; "1/2-31": string };
      backgroundImage: { "gradient-conic": string; "gradient-radial": string }
    }
  };
  content: string[]
} = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      top: {
        '1/2-42': 'calc(50% - 42px)',
        '1/2-31': 'calc(50% - 31px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
