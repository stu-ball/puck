import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Hero: {
    title: string;
    description: string;
    buttons: { label: string; href: string; variant?: string }[];
    id: string;
    image?: { url: string; mode?: string; content?: any[] };
    padding?: string;
    align?: string;
  };
  Space: { size: string; id: string; direction: string };
  Heading: {
    align: string;
    level: string;
    text: string;
    layout?: { padding?: string };
    size?: string;
    id: string;
  };
  Text: {
    align: string;
    text: string;
    layout?: { padding?: string };
    size?: string;
    id: string;
    color?: string;
    maxWidth?: string;
  };
  Grid: {
    id: string;
    gap?: number;
    numColumns?: number;
    items?: any[];
  };
  Card: {
    title: string;
    description: string;
    icon?: string;
    mode?: string;
    layout?: { grow?: boolean; spanCol?: number; spanRow?: number; padding?: string };
    id: string;
  };
  Stats: {
    items: { title: string; description: string }[];
    id: string;
  };
  Button: {
    label: string;
    href: string;
    variant?: string;
    id: string;
  };
  Flex: {
    justifyContent?: string;
    direction?: string;
    gap?: number;
    wrap?: string;
    layout?: { spanCol?: number; spanRow?: number; padding?: string };
    id: string;
    items?: any[];
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Hero: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        buttons: {
          type: "array",
          of: {
            type: "object",
            fields: {
              label: { type: "text" },
              href: { type: "text" },
              variant: { type: "text", optional: true },
            },
          },
        },
        id: { type: "text" },
        image: {
          type: "object",
          fields: {
            url: { type: "text" },
            mode: { type: "text", optional: true },
            content: { type: "array", of: { type: "text" }, optional: true }
          },
          optional: true
        },
        padding: { type: "text", optional: true },
        align: { type: "text", optional: true },
      },
      render: ({ title, description }) => (
        <section style={{ padding: 64 }}>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
      ),
    },
    Space: {
      fields: {
        size: { type: "text" },
        id: { type: "text" },
        direction: { type: "text" },
      },
      render: ({ size }) => <div style={{ height: size }} />,
    },
    Heading: {
      fields: {
        align: { type: "text" },
        level: { type: "text" },
        text: { type: "text" },
        layout: {
          type: "object",
          fields: {
            padding: { type: "text" }
          }
        },
        size: { type: "text", optional: true },
        id: { type: "text" },
      },
      render: ({ text }) => <h2>{text}</h2>,
    },
    Text: {
      fields: {
        align: { type: "text" },
        text: { type: "text" },
        layout: {
          type: "object",
          fields: {
            padding: { type: "text" }
          }
        },
        size: { type: "text", optional: true },
        id: { type: "text" },
        color: { type: "text", optional: true },
        maxWidth: { type: "text", optional: true },
      },
      render: ({ text }) => <p>{text}</p>,
    },
    Grid: {
      fields: {
        id: { type: "text" },
        gap: { type: "number", optional: true },
        numColumns: { type: "number", optional: true },
        items: { type: "array", of: { type: "object", fields: {} }, optional: true },
      },
      render: ({ children }) => <div style={{ display: "grid" }}>{children}</div>,
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        icon: { type: "text", optional: true },
        mode: { type: "text", optional: true },
        layout: {
          type: "object",
          fields: {
            grow: { type: "boolean" },
            spanCol: { type: "number" },
            spanRow: { type: "number" },
            padding: { type: "text" }
          }
        },
        id: { type: "text" },
      },
      render: ({ title, description }) => (
        <div style={{ border: "1px solid #eee", padding: 24 }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ),
    },
    Stats: {
      fields: {
        items: {
          type: "array",
          of: {
            type: "object",
            fields: {
              title: { type: "text" },
              description: { type: "text" },
            },
          },
        },
        id: { type: "text" },
      },
      render: ({ items }) => (
        <ul>
          {items?.map((item, i) => (
            <li key={i}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      ),
    },
    Button: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: { type: "text", optional: true },
        id: { type: "text" },
      },
      render: ({ label }) => <button>{label}</button>,
    },
    Flex: {
      fields: {
        justifyContent: { type: "text", optional: true },
        direction: { type: "text", optional: true },
        gap: { type: "number", optional: true },
        wrap: { type: "text", optional: true },
        layout: {
          type: "object",
          fields: {
            spanCol: { type: "number" },
            spanRow: { type: "number" },
            padding: { type: "text" }
          }
        },
        id: { type: "text" },
        items: { type: "array", of: { type: "object", fields: {} }, optional: true },
      },
      render: ({ children }) => <div style={{ display: "flex" }}>{children}</div>,
    },
  },
};

export default config;
