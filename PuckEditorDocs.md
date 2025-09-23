================
CODE SNIPPETS
================
TITLE: Install Puck Editor Package
DESCRIPTION: Instructions for installing the @measured/puck package using common JavaScript package managers like npm, pnpm, yarn, and bun.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: npm
CODE:
```
npm i @measured/puck --save
```

LANGUAGE: pnpm
CODE:
```
pnpm add @measured/puck
```

LANGUAGE: yarn
CODE:
```
yarn add @measured/puck
```

LANGUAGE: bun
CODE:
```
bun add @measured/puck
```

--------------------------------

TITLE: Puck Editor Documentation - Getting Started
DESCRIPTION: The 'Getting Started' guide for Puck Editor. This section provides instructions on how to set up and begin using Puck in a project.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Documentation:
  Getting Started: https://puckeditor.com/docs/getting-started
```

--------------------------------

TITLE: Puck Editor Introduction and Getting Started
DESCRIPTION: Provides an introduction to Puck and guides for getting started with the visual editor for React.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/overview

LANGUAGE: APIDOC
CODE:
```
Puck Editor:

Introduction:
  - Introduction to Puck.
  - Link: https://puckeditor.com/docs

Getting Started:
  - Guide to get started with Puck.
  - Link: https://puckeditor.com/docs/getting-started
```

--------------------------------

TITLE: Puck Editor Introduction and Getting Started
DESCRIPTION: Provides an introduction to Puck and guides for getting started with the visual editor for React.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
Puck Editor:

Introduction:
  - Introduction to Puck.
  - Link: https://puckeditor.com/docs

Getting Started:
  - Guide to get started with Puck.
  - Link: https://puckeditor.com/docs/getting-started
```

--------------------------------

TITLE: Generate New Puck Application
DESCRIPTION: Command to quickly scaffold a new Puck application using the npx create-puck-app utility, providing a ready-to-use project structure.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: Shell
CODE:
```
npx create-puck-app my-app
```

--------------------------------

TITLE: Render Puck Editor in React Application
DESCRIPTION: Example of how to import and use the Puck editor component in a React application. This snippet demonstrates basic configuration for custom components, defining initial data, and handling the publish (save) event.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// Create Puck component config
const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {};

// Render Puck editor
export function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
```

--------------------------------

TITLE: Render a Page with Puck's Render Component
DESCRIPTION: This JavaScript/JSX snippet illustrates how to create a React functional component, `Page`, that utilizes the `Render` component from the `@measured/puck` library. It imports `Render` and passes `config` and `data` props to it, which are crucial for defining and populating the page's structure and content.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: JSX
CODE:
```
import { Render } from "@measured/puck";

export function Page() {
  return <Render config={config} data={data} />;
}
```

--------------------------------

TITLE: Install Puck Editor
DESCRIPTION: Installs the Puck editor package using various package managers.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: bash
CODE:
```
npm i @measured/puck --save
```

LANGUAGE: bash
CODE:
```
pnpm add @measured/puck
```

LANGUAGE: bash
CODE:
```
yarn add @measured/puck
```

LANGUAGE: bash
CODE:
```
bun add @measured/puck
```

--------------------------------

TITLE: Basic Usage of Puck Editor Component
DESCRIPTION: This snippet demonstrates how to import and render the Puck editor component. It initializes the editor with a basic configuration and initial data structure, showing the minimal setup required to get Puck running.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";

const config = {
  components: {},
};

const initialData = {
  content: [],
  root: {},
};

export function Editor() {
  return <Puck config={config} data={initialData} />;
}
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: Guides on integrating Puck into your project, covering component configuration, root configuration, layouts, and more.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  - Details on configuring components within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Details on configuring the root of your Puck setup.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Information on creating multi-column layouts.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - How to use categories for organizing components.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Using dynamic props in your components.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Utilizing dynamic fields for flexible content.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Connecting to external data sources.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Integration with React Server Components.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Guidance on migrating data for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Configuring and using viewports.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Implementing feature toggling within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Using overlay portals for UI elements.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Root Component Example
DESCRIPTION: Example of configuring a root component to wrap the entire component tree.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: javascript
CODE:
```
const config = {
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    }
  }
  // ...
};
```

--------------------------------

TITLE: Puck Integration Guides
DESCRIPTION: Guides on integrating Puck into existing projects, covering component configuration, root configuration, and advanced layouts.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Integration:

Component Configuration:
  - Description: How to configure individual React components for use with Puck.
  - Usage: Define props, fields, and rendering logic.

Root Configuration:
  - Description: Setting up the main Puck editor instance and its global options.

Multi-column Layouts:
  - Description: Implementing complex layouts with multiple columns.

Categories:
  - Description: Organizing components into categories for easier selection.

Dynamic Props:
  - Description: Handling props that change dynamically based on application state.

Dynamic Fields:
  - Description: Creating fields whose options or behavior depend on other field values.

External Data Sources:
  - Description: Integrating Puck with external data fetching mechanisms.

React Server Components:
  - Description: Guidelines for using Puck with React Server Components.

Data Migration:
  - Description: Strategies for migrating data between different Puck versions or schemas.

Viewports:
  - Description: Defining and managing different viewport sizes for responsive previews.

Feature Toggling:
  - Description: Implementing feature flags within the Puck editor.

Overlay Portals:
  - Description: Using portals for overlay elements within Puck.
```

--------------------------------

TITLE: Legacy Data Structure Example
DESCRIPTION: An example of the legacy data structure before migration, showing the 'root', 'content', and 'zones' properties.

SOURCE: https://puckeditor.com/docs/api-reference/functions/migrate

LANGUAGE: json
CODE:
```
{
  "root": {
    "props": {
      "title": "Legacy Zones Migration"
    }
  },
  "content": [
    {
      "type": "Columns",
      "props": {
        "columns": [{}],
        "id": "Columns-eb9dfe22-4408-44e6-b8e5-fbaedbbdb3be"
      }
    }
  ],
  "zones": {
    "Columns-eb9dfe22-4408-44e6-b8e5-fbaedbbdb3be:column-0": [
      {
        "type": "Text",
        "props": {
          "text": "Drop zone 1",
          "id": "Text-c2b5c0a5-d76b-4120-8bb3-99934e119967"
        }
      }
    ]
  }
}
```

--------------------------------

TITLE: Puck Editor - Data Prop Example
DESCRIPTION: Example of how to provide the `data` prop to the Puck Editor, initializing the content and root structure.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      data={{
        content: [
          {
            props: { children: "Hello, world", id: "id" },
            type: "HeadingBlock",
          },
        ],
        root: {},
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Migrated Data Structure Example
DESCRIPTION: An example of the data structure after migration, demonstrating how dynamic zones have been transformed into slots.

SOURCE: https://puckeditor.com/docs/api-reference/functions/migrate

LANGUAGE: json
CODE:
```
{
  "root": {
    "props": {
      "title": "Legacy Zones Migration"
    }
  },
  "content": [
    {
      "type": "Columns",
      "props": {
        "columns": [
          {
            "column": [
              {
                "type": "Text",
                "props": {
                  "text": "Drop zone 1",
                  "id": "Text-c2b5c0a5-d76b-4120-8bb3-99934e119967"
                }
              }
            ]
          }
        ],
        "id": "Columns-eb9dfe22-4408-44e6-b8e5-fbaedbbdb3be"
      }
    }
  ]
}
```

--------------------------------

TITLE: Component Render Function Example
DESCRIPTION: An example of a render function for a component, demonstrating how to use the provided props to render the component's content.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      render: () => <h1>Hello, world</h1>,
    },
  },
};
```

--------------------------------

TITLE: Puck Extension Guides
DESCRIPTION: Guides on extending Puck's functionality, including composition, custom fields, and plugin development.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Extension:

Composition:
  - Description: Techniques for composing Puck components and creating reusable elements.

Custom Fields:
  - Description: Creating custom input field types for Puck.
  - Usage: Define field schema, rendering, and data handling.

Field Transforms:
  - Description: Applying transformations to field data (e.g., formatting, validation).

Internal Puck API:
  - Description: Accessing and utilizing Puck's internal APIs for advanced customization.

Theming:
  - Description: Customizing the visual theme of the Puck editor.

Plugin API:
  - Description: Developing plugins to add new features or modify existing behavior.

UI Overrides:
  - Description: Overriding specific UI elements or components within Puck.
```

--------------------------------

TITLE: Drawer Item Usage Example
DESCRIPTION: Demonstrates how to use the Drawer.Item component within a Puck Editor setup to render custom content. It shows the import of necessary components and the structure for defining a drawer item with custom rendering logic.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: javascript
CODE:
```
import { Puck, Drawer } from "@measured/puck";
export function Editor() {
  return (
    <Puck>
      <Drawer>
        <Drawer.Item name="Orange">{() => <div>Orange 🍊</div>}</Drawer.Item>
      </Drawer>
    </Puck>
  );
}
```

--------------------------------

TITLE: HeadingBlock Component Example
DESCRIPTION: Example of a 'HeadingBlock' component configuration, defining its fields and render function.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text"
        }
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/radio

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/text

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Editor - Config Prop Example
DESCRIPTION: Example of how to provide the `config` prop to the Puck Editor, defining custom components and their fields.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      config={{
        components: {
          HeadingBlock: {
            fields: {
              children: {
                type: "text",
              },
            },
            render: ({ children }) => {
              return <h1>{children}</h1>;
            },
          },
        },
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: JavaScript Example: Dispatch setUi Action
DESCRIPTION: Example demonstrating how to dispatch the `setUi` action to update Puck's UI state. This specific example sets `leftSideBarVisible` to `false`.

SOURCE: https://puckeditor.com/docs/api-reference/actions

LANGUAGE: JavaScript
CODE:
```
dispatch({
  type: "setUi",
  ui: {
    leftSideBarVisible: false,
  },
});
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/textarea

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/base

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: Guides on extending Puck's functionality, including composition, custom fields, field transforms, and the plugin API.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: APIDOC
CODE:
```
Composition:
  - Extending Puck through component composition.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Creating and using custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Implementing custom field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Utilizing the internal Puck API for advanced customization.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Customizing the appearance and theming of Puck.
  - Link: https://puckeditor.com/docs/extending-puck/theming

Plugin API:
  - Developing and integrating plugins for Puck.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Overriding default UI elements in Puck.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Distribute Field Transforms as Plugins
DESCRIPTION: Demonstrates how to package field transforms and overrides into a plugin for distribution. This example shows a plugin that wraps 'example' fields and defines a new 'example' field type with an input override.

SOURCE: https://puckeditor.com/docs/extending-puck/field-transforms

LANGUAGE: javascript
CODE:
```
const plugin = {
  fieldTransforms: {
    example: ({ value }) => <div>{value}</div>,
  },
  overrides: {
    fieldTypes: {
      example: () => <input />,
    },
  },
};

const Example = () => <Puck plugins={[plugin]} />;
```

--------------------------------

TITLE: Categories Configuration Example
DESCRIPTION: Example of configuring categories to group components in the Puck Editor sidebar.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: javascript
CODE:
```
const config = {
  categories: {
    typography: {
      components: ["HeadingBlock"]
    }
  }
  // ...
};
```

--------------------------------

TITLE: Puck Editor - Children Prop Example
DESCRIPTION: Example demonstrating the use of the `children` prop to render custom nodes, such as the Puck Preview component.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck /*...*/ >
      <Puck.Preview />
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/custom

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Get root permissions
DESCRIPTION: Example of using `getPermissions` to retrieve permissions configured for the root of the application.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getPermissions({ root: true });
// { delete: false }
```

--------------------------------

TITLE: JSON Example: "zones" Property
DESCRIPTION: A JSON example demonstrating the structure of the "zones" property, illustrating how components are organized within a specific "zoneKey" (e.g., 'HeadingBlock-1234:my-content').

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: JSON
CODE:
```
{
  "content": [],
  "root": {},
  "zones": {
    "HeadingBlock-1234:my-content": [
      {
        "type": "HeadingBlock",
        "props": {
          "id": "HeadingBlock-1234",
          "title": "Hello, world"
        }
      }
    ]
  }
}
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Editor Documentation - Introduction
DESCRIPTION: The introductory documentation for Puck Editor, covering its purpose and basic concepts. This serves as a starting point for new users.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Documentation:
  Introduction: https://puckeditor.com/docs
```

--------------------------------

TITLE: JSON Example: "root" Property
DESCRIPTION: A JSON example demonstrating the structure of the "root" property, showing a page title within its "props".

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: JSON
CODE:
```
{
  "content": [],
  "root": {
    "props": {
      "title": "My page"
    }
  },
  "zones": {}
}
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/number

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section provides guidance on integrating Puck into existing projects. It covers essential aspects like component configuration, root configuration, and setting up multi-column layouts.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/preview

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - How to configure individual components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Setting up the root configuration for the Puck editor.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Implementing multi-column layouts within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Organizing components using categories.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Utilizing dynamic props for component flexibility.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Working with dynamic fields in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Integrating external data sources with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Using Puck with React Server Components.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Strategies for migrating data to Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Configuring and managing viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Implementing feature toggles within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Using overlay portals for UI elements.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This guide covers various aspects of integrating Puck into your project. It includes sections on component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: APIDOC
CODE:
```
Puck Integration Guide:

Component Configuration:
  - Description: How to configure individual components for use with Puck.

Root Configuration:
  - Description: Settings for the root-level Puck configuration.

Multi-column Layouts:
  - Description: Implementing multi-column layouts within Puck.

Categories:
  - Description: Organizing components using categories.

Dynamic Props:
  - Description: Handling dynamic properties for components.

Dynamic Fields:
  - Description: Creating fields that adapt dynamically.

External Data Sources:
  - Description: Integrating data from external sources.

React Server Components:
  - Description: Using React Server Components with Puck.

Data Migration:
  - Description: Guidance on migrating data for Puck.

Viewports:
  - Description: Configuring and managing viewports.

Feature Toggling:
  - Description: Implementing feature toggles within Puck.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide covers extending Puck's functionality. It includes information on composition, custom fields, field transforms, and the plugin API.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/preview

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Techniques for composing components in Puck.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Creating and using custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Implementing custom field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Understanding and utilizing the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Customizing the Puck editor's theme.
  - Link: https://puckeditor.com/docs/extending-puck/theming

Plugin API:
  - Developing plugins for Puck.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Customizing the user interface through overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Example usage of walkTree function in JavaScript
DESCRIPTION: Demonstrates how to import and use `walkTree` from `@measured/puck` to modify properties of child components within a data structure. The example shows adding an 'example' prop to all children and logs the resulting data structure.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: javascript
CODE:
```
import { walkTree } from "@measured/puck";

// Add the example prop to all children in the data
const newData = walkTree(data, config, (content) =>
  content.map((child) => ({
    ...child,
    props: { ...child.props, example: "Hello, world" },
  }))
);

console.log(newData);
// {
//   "root": {},
//   "content": [
//     {
//       "type": "Component",
//       "props": {
//         "id": "1234",
//         "content": [
//           {
//             "type": "Child",
//             "props": { "id": "5678", "example": "Hello, world" }
//           }
//         ],
//         "example": "Hello, world"
//       }
//     }
//   ]
// }
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section provides guidance on integrating Puck into existing projects. It covers essential aspects like component configuration, root configuration, and setting up multi-column layouts.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - How to configure individual components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Setting up the root configuration for the Puck editor.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Implementing multi-column layouts within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Organizing components using categories.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Utilizing dynamic props for component flexibility.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Working with dynamic fields in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Integrating external data sources with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Using Puck with React Server Components.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Strategies for migrating data to Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Configuring and managing viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Implementing feature toggles within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Using overlay portals for UI elements.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section provides guidance on integrating Puck into existing projects. It covers essential aspects like component configuration, root configuration, and setting up multi-column layouts.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - How to configure individual components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Setting up the root configuration for the Puck editor.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Implementing multi-column layouts within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Organizing components using categories.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Utilizing dynamic props for component flexibility.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Working with dynamic fields in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Integrating external data sources with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Using Puck with React Server Components.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Strategies for migrating data to Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Configuring and managing viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Implementing feature toggles within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Using overlay portals for UI elements.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Get permissions by component type
DESCRIPTION: Example of using `getPermissions` to retrieve permissions defined for a specific component type.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getPermissions({ type: "HeadingBlock" });
// { delete: false }
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section provides guidance on integrating Puck into existing projects. It covers essential aspects like component configuration, root configuration, and setting up multi-column layouts.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/puck

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - How to configure individual components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Setting up the root configuration for the Puck editor.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Implementing multi-column layouts within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Organizing components using categories.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Utilizing dynamic props for component flexibility.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Working with dynamic fields in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Integrating external data sources with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Using Puck with React Server Components.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Strategies for migrating data to Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Configuring and managing viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Implementing feature toggles within Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Using overlay portals for UI elements.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: DropZone Basic Usage
DESCRIPTION: Example demonstrating the basic usage of the DropZone component with the required 'zone' prop.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: Puck API Usage Example with Composition
DESCRIPTION: A practical example demonstrating how to use the internal Puck API within a composition context to render page data as JSON. This showcases combining the API with component rendering.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: javascript
CODE:
```
import { Puck, createUsePuck } from "@measured/puck";

const usePuck = createUsePuck();

const JSONRenderer = () => {
  const appState = usePuck((s) => s.appState);
  return <div>{JSON.stringify(appState.data)}</div>;
};

export function Editor() {
  return (
    <Puck>
      <JSONRenderer />
    </Puck>
  );
}
```

--------------------------------

TITLE: Get permissions for a specific item
DESCRIPTION: Example of using `getPermissions` to retrieve resolved permissions for a specific component instance by providing its item data.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getPermissions({
  item: { type: "HeadingBlock", props: { id: "Heading-1234" } },
});
// { delete: false }
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide covers extending Puck's functionality. It includes information on composition, custom fields, field transforms, and the plugin API.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/drawer-item

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Techniques for composing components in Puck.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Creating and using custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Implementing custom field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Understanding and utilizing the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Customizing the Puck editor's theme.
  - Link: https://puckeditor.com/docs/extending-puck/theming

Plugin API:
  - Developing plugins for Puck.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Customizing the user interface through overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide covers extending Puck's functionality. It includes information on composition, custom fields, field transforms, and the plugin API.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/puck

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Techniques for composing components in Puck.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Creating and using custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Implementing custom field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Understanding and utilizing the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Customizing the Puck editor's theme.
  - Link: https://puckeditor.com/docs/extending-puck/theming

Plugin API:
  - Developing plugins for Puck.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Customizing the user interface through overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide covers extending Puck's functionality. It includes information on composition, custom fields, field transforms, and the plugin API.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/action-bar

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Techniques for composing components in Puck.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Creating and using custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Implementing custom field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Understanding and utilizing the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Customizing the Puck editor's theme.
  - Link: https://puckeditor.com/docs/extending-puck/theming

Plugin API:
  - Developing plugins for Puck.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Customizing the user interface through overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Set Initial History State (Code Example)
DESCRIPTION: Example of setting the initial undo/redo history state for the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
const historyState = {
  data: {
    root: {
      props: { title: "My History" },
    },
  },
};
export function Editor() {
  return (
    <Puck
      initialHistory={{
        histories: [{ state: historyState }],
        index: 0,
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Configure a Select Field in Puck Component
DESCRIPTION: This example demonstrates how to define a 'select' field within a Puck component's configuration. The 'select' field type requires an 'options' array, where each object specifies a 'label' for display and a 'value' for the field's output. This setup allows users to choose from predefined options, such as text alignment in this case.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        textAlign: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" }
          ]
        }
      },
      render: ({ textAlign }) => {
        return <p style={{ textAlign }}>Hello, world</p>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Integration: Root Configuration
DESCRIPTION: Details on configuring the root of the Puck editor instance, including global settings and initial setup.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Root Configuration:

This guide covers the configuration of the root Puck editor instance, including global settings.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/radio

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/text

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/base

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Editor Integration: Root Configuration
DESCRIPTION: Details on configuring the root of the Puck editor instance, including global settings and initial setup.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Root Configuration:

This guide covers the configuration of the root Puck editor instance, including global settings.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/textarea

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: JSON Example: "content" Property
DESCRIPTION: A JSON example demonstrating the structure of the "content" property, showing an array containing a "HeadingBlock" component.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: JSON
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234",
        "title": "Hello, world"
      }
    }
  ],
  "root": {},
  "zones": {}
}
```

--------------------------------

TITLE: Example: Setting DropZone 'zone' Prop
DESCRIPTION: Illustrates how to set the 'zone' prop for the DropZone component, which is a required unique identifier for the droppable region within a component. This example is identical to the basic usage demonstration.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension - Composition
DESCRIPTION: Guide on component composition in Puck. This covers how to build complex components by combining simpler ones.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Extending Puck - Composition:
  This guide explains the concept of component composition in Puck.
  Composition allows you to build complex UIs by combining smaller, reusable components.
  
  Principles:
    - Container/Presentational Components:
      - Create components that manage data and logic (containers) and pass data to presentational components.
    - Higher-Order Components (HOCs):
      - Use HOCs to add reusable functionality to components.
    - Render Props:
      - Pass render functions as props to share logic between components.
  
  Example:
    // Base Button Component
    const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

    // Button Configuration for Puck
    const buttonConfig = {
      name: 'Button',
      fields: [
        { name: 'label', type: 'text', label: 'Button Text' },
      ],
      render: Button
    };

    // A Card Component that uses the Button
    const Card = ({ title, description, button }) => (
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        {button} {/* Render the button component passed as a prop */}
      </div>
    );

    // Card Configuration for Puck
    const cardConfig = {
      name: 'Card',
      fields: [
        { name: 'title', type: 'text', label: 'Card Title' },
        { name: 'description', type: 'textarea', label: 'Card Description' },
        { name: 'button', type: 'component', component: 'Button', label: 'Action Button' } // Embed the Button component
      ],
      render: Card
    };
```

--------------------------------

TITLE: Puck Editor Integration: Root Configuration
DESCRIPTION: Details on configuring the root of the Puck editor instance, including global settings and initial setup.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Root Configuration:

This guide covers the configuration of the root Puck editor instance, including global settings.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Editor Integration: Root Configuration
DESCRIPTION: Details on configuring the root of the Puck editor instance, including global settings and initial setup.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Root Configuration:

This guide covers the configuration of the root Puck editor instance, including global settings.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/custom

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck Integration - Root Configuration
DESCRIPTION: Guide on configuring the root element for Puck. This sets up the initial state and context for the editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Root Configuration:
  This section details how to configure the root element for your Puck editor instance.
  The root configuration defines the initial data and settings.
  
  Root Configuration:
    - initialState: any - The initial state or data for the editor content.
    - components: Record<string, ComponentConfig> - A map of available components.
    - fieldTypes?: Record<string, FieldType> - Custom field types.
    - actions?: Record<string, Action> - Custom actions.
    - overrides?: Record<string, Override> - UI overrides.
    - permissions?: Permissions - User permissions.
    - theming?: ThemingConfig - Theme settings.
  
  Example:
  const rootConfig = {
    initialState: { content: [{ type: 'Text', props: { title: 'Hello' } }] },
    components: { Text: textComponentConfig },
    // ... other configurations
  };
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This guide focuses on extending Puck's capabilities. It covers composition, custom fields, field transforms, the internal Puck API, theming, the plugin API, and UI overrides, enabling deeper customization and integration.

SOURCE: https://puckeditor.com/docs/api-reference/fields/number

LANGUAGE: APIDOC
CODE:
```
Puck Extension Guide:

Composition:
  - Description: Techniques for composing components in Puck.

Custom Fields:
  - Description: Creating custom field types for Puck.

Field Transforms:
  - Description: Applying transformations to field data.

Internal Puck API:
  - Description: Accessing and utilizing the internal Puck API.

Theming:
  - Description: Customizing the visual theme of Puck.

Plugin API:
  - Description: Developing plugins for Puck.

UI Overrides:
  - Description: Overriding Puck's user interface elements.
```

--------------------------------

TITLE: Puck ComponentData JSON Example
DESCRIPTION: An example JSON object illustrating the structure of a `ComponentData` instance in Puck. It shows how component `type` and `props` are defined for a 'HeadingBlock' component.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: JSON
CODE:
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234",
    "title": "Hello, world"
  }
}
```

--------------------------------

TITLE: Integrating Puck - Component Configuration
DESCRIPTION: Guide on configuring individual components within Puck, including their properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  - How to define and customize components used in Puck.
  - Includes setting up props, fields, and rendering logic for components.
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Configure Iframe Behavior (Code Example)
DESCRIPTION: Example of how to configure the iframe behavior in Puck Editor, specifically disabling the iframe.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      iframe={{ enabled: false }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Integrating Puck - Component Configuration
DESCRIPTION: Guide on configuring individual components within Puck, including their properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  - How to define and customize components used in Puck.
  - Includes setting up props, fields, and rendering logic for components.
```

--------------------------------

TITLE: FieldLabel Component Usage Example
DESCRIPTION: An example demonstrating how to use the FieldLabel component within a custom React component for Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";

const CustomField = () => (
  <FieldLabel label="Title">
    <input />
  </FieldLabel>
);

const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          render: MyCustomField,
        },
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration: Root Configuration
DESCRIPTION: Details on configuring the root of the Puck editor instance, including global settings and initial setup.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Root Configuration:

This guide covers the configuration of the root Puck editor instance, including global settings.
```

--------------------------------

TITLE: Integrating Puck - Component Configuration
DESCRIPTION: Guide on configuring components within Puck. This covers defining component properties, fields, and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: markdown
CODE:
```
## Component Configuration

Component configuration is central to defining how your React components are represented and edited within Puck. Each component you want to use in the visual editor needs a configuration object.

### Key Properties:

*   `component`: The React component itself.
*   `name`: A human-readable name for the component.
*   `fields`: An array of field definitions that allow users to configure the component's props.
*   `children`: A boolean or configuration object indicating if the component can accept child components.

### Example:

```javascript
{
  component: MyButtonComponent,
  name: 'Button',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Button Label',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      options: ['primary', 'secondary', 'danger'],
    },
  ],
  children: false, // This button does not accept children
}
```
```

--------------------------------

TITLE: Extending Puck - Plugin API
DESCRIPTION: Guide on the Plugin API for extending Puck's functionality with custom components, fields, and more.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: markdown
CODE:
```
## Plugin API

The Plugin API allows you to extend Puck's core functionality by adding custom components, fields, custom rendering logic, and more.

### Plugin Structure:

A plugin is typically an object with properties that correspond to different extension points in Puck.

### Extension Points:

*   `components`: An object where you can register new components.
*   `fields`: An object where you can register custom field types.
*   `renderers`: Custom rendering functions for specific data types or components.
*   `actions`: Define new actions that can be triggered within the editor.
*   `hooks`: Functions that can hook into various editor lifecycle events.

### Example Plugin:

```javascript
// my-plugin.js
import React from 'react';
import { RangeSliderField } from './CustomFields'; // Assuming CustomFields.jsx exists

const MyCustomComponent = ({ text }) => <div>Custom: {text}</div>;

export const myPuckPlugin = {
  name: 'MyCustomPlugin',
  components: {
    MyCustomComponent: {
      component: MyCustomComponent,
      name: 'Custom Component',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
  },
  fields: {
    rangeSlider: RangeSliderField, // Registering the custom field
  },
};

// In your Puck initialization:
import { Puck } from '@puckeditor/core';
import { myPuckPlugin } from './my-plugin';

const editor = new Puck({
  plugins: [myPuckPlugin],
  // ... other configurations
});
```
```

--------------------------------

TITLE: Create Puck App
DESCRIPTION: Generates a new Puck application using the create-puck-app command.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: bash
CODE:
```
npx create-puck-app my-app
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Configuration Object Definition Example
DESCRIPTION: Demonstrates a basic Puck configuration object with a custom component definition. This configuration dictates what content Puck can render and how components are structured.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text"
        }
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor transformProps Example
DESCRIPTION: Example demonstrating how to use the `transformProps` function to rename a prop in Puck Editor's data payload.

SOURCE: https://puckeditor.com/docs/api-reference/functions/transform-props

LANGUAGE: javascript
CODE:
```
import { transformProps } from "@measured/puck";

const data = {
  content: [{ type: "HeadingBlock", props: { title: "Hello, world" } }]
};

const updatedData = transformProps(data, {
  // Rename `title` to `heading`
  HeadingBlock: ({ title, ...props }) => ({ heading: title, ...props })
});

console.log(updatedData);
// Expected output: { content: [{ type: "HeadingBlock", props: { heading: "Hello, world" } }] }
```

--------------------------------

TITLE: JavaScript Example: Dispatch setData Action
DESCRIPTION: Example demonstrating how to dispatch the `setData` action to update Puck's data payload. The `data` parameter should contain the new data object.

SOURCE: https://puckeditor.com/docs/api-reference/actions

LANGUAGE: JavaScript
CODE:
```
dispatch({
  type: "setData",
  data: {},
});
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/outline

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section details how to integrate Puck into your existing React projects. It covers essential configuration steps for components, roots, and advanced layouts.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
// Integrating Puck into your project
// Refer to the documentation for detailed steps:
// https://puckeditor.com/docs/integrating-puck
```

--------------------------------

TITLE: Puck `Data` Object JSON Structure Example
DESCRIPTION: An example JSON representation of the `Data` object, illustrating how content, root properties, and zones are structured within Puck's content model.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: JSON
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234",
        "title": "Hello, world"
      }
    }
  ],
  "root": { "props": { "title": "Puck Example" } },
  "zones": {}
}
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-overlay

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Custom Field Configuration Example
DESCRIPTION: An example of configuring a custom field named 'title' with inline editing enabled in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/custom

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          contentEditable: true,
          render: ({ name, onChange, value }) => (
            <input
              value={value} // Bind to value for 2-way binding
              name={name}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
          ),
        },
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-overlay

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Component Rendering with TypeScript
DESCRIPTION: Provides a TypeScript example for defining a Puck component configuration. It includes type definitions for components to ensure strict type checking for the component structure and its properties.

SOURCE: https://puckeditor.com/docs/integrating-puck/component-configuration

LANGUAGE: typescript
CODE:
```
import type { Config } from "@measured/puck";
type Components = {
  HeadingBlock: {};
};
const config: Config<Components> = {
  components: {
    HeadingBlock: {
      render: () => {
        return <h1>Hello, world</h1>;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/iframe

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Editor Resources
DESCRIPTION: Provides links to essential Puck Editor resources, including documentation, a live demo, blog, and GitHub releases.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
Resources:
  Docs: https://puckeditor.com/docs
  Live Demo: https://demo.puckeditor.com/edit
  Blog: https://puckeditor.com/blog
  Releases: https://github.com/puckeditor/puck/releases
```

--------------------------------

TITLE: Configure a component with a slot field in Puck
DESCRIPTION: This JavaScript example demonstrates how to define a component in Puck's configuration that utilizes the `slot` field type. The `Example` component's `content` field is set as a 'slot', allowing it to render nested components. A simple `Card` component is also defined, which could be placed within the `Example` component's slot.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        content: {
          type: "slot"
        }
      },
      render: ({ content: Content }) => {
        return <Content />;
      }
    },
    Card: {
      render: () => <div>Hello, world</div>
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/components

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Integration - Viewports
DESCRIPTION: Guide on configuring and using viewports in Puck. This allows users to preview components at different screen sizes.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Viewports:
  This guide explains how to configure and use viewports in Puck for responsive previews.
  Define different screen sizes to test your component layouts.
  
  Viewport Configuration:
    - Viewports are typically defined in the root configuration or globally.
    - Each viewport has a name and dimensions.
  
  Example Viewport Configuration:
    const rootConfig = {
      // ... other config
      viewports: [
        { label: 'Mobile', width: 375, height: 667 },
        { label: 'Tablet', width: 768, height: 1024 },
        { label: 'Desktop', width: 1280, height: 800 }
      ]
    };
  
  The Puck editor UI will provide controls to switch between these defined viewports.
```

--------------------------------

TITLE: Puck Editor Integration: Data Migration
DESCRIPTION: Guide on migrating data between different versions or structures of Puck configurations.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Data Migration:

This guide provides instructions for migrating data within Puck configurations.
```

--------------------------------

TITLE: RootData JSON Structure Example
DESCRIPTION: Demonstrates the basic JSON structure of a RootData object, showing how arbitrary properties can be nested under the 'props' key.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: json
CODE:
```
{
  "props": {
    "title": "Hello, world"
  }
}
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header-actions

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Optimizing usePuck Re-renders with Selector Function
DESCRIPTION: This example demonstrates how to effectively use the `selector` function with `usePuck` to control component re-renders. The 'Good' example shows granular selection to re-render only when `selectedItem` changes. The 'Bad' examples illustrate common mistakes: selecting the entire state (causing re-renders on any change) or creating new object references within the selector, which leads to infinite comparison loops and unnecessary re-renders.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-puck

LANGUAGE: JavaScript
CODE:
```
// Good: only re-render when the `selectedItem` changes
const selectedItem = usePuck((s) => s.selectedItem);

// Bad: re-render when anything changes
const { selectedItem } = usePuck();
const { selectedItem } = usePuck((s) => s);

// Bad: selector creates a new object reference, causing an infinite comparison loop
const { selectedItem } = usePuck((s) => ({ ...s.selectedItem }));
```

--------------------------------

TITLE: Puck Editor Resources
DESCRIPTION: Lists essential resources for Puck Editor users, including documentation, a live demo, blog, and release information.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: APIDOC
CODE:
```
Docs: https://puckeditor.com/docs
Live Demo: https://demo.puckeditor.com/edit
Blog: https://puckeditor.com/blog
Releases: https://github.com/puckeditor/puck/releases
```

--------------------------------

TITLE: Puck Editor Integration - Root Configuration
DESCRIPTION: Guide on 'Root Configuration' for integrating Puck Editor. This section explains how to configure the main Puck editor instance and its global settings.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
```

--------------------------------

TITLE: Puck Integration Guide
DESCRIPTION: This section details how to integrate Puck into your existing React projects. It covers essential configuration steps for components, roots, and advanced layouts.

SOURCE: https://puckeditor.com/docs/api-reference/permissions

LANGUAGE: javascript
CODE:
```
// Integrating Puck into your project
// Refer to the documentation for detailed steps:
// https://puckeditor.com/docs/integrating-puck
```

--------------------------------

TITLE: Puck Editor Integration: Data Migration
DESCRIPTION: Guide on migrating data between different versions or structures of Puck configurations.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Data Migration:

This guide provides instructions for migrating data within Puck configurations.
```

--------------------------------

TITLE: Puck Editor Integration: Component Configuration
DESCRIPTION: Guide on configuring components when integrating Puck into a project, detailing how to define component properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Component Configuration:

This guide explains how to configure components for integration with Puck, including defining their properties and behavior within the editor.
```

--------------------------------

TITLE: PuckApi Parameters Reference
DESCRIPTION: Detailed reference for each parameter available on the PuckApi object, including their types, example values, and descriptions where provided.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: APIDOC
CODE:
```
PuckApi.appState:
  Example: { data: {}, ui: {} }
  Type: AppState
  Description: The current application state for this Puck instance.
PuckApi.dispatch:
  Example: (action: PuckAction) => void
  Type: Function
PuckApi.getItemBySelector:
  Example: () => ({ type: "Heading", props: {} })
  Type: Function
PuckApi.getItemById:
  Example: () => ({ type: "Heading", props: {} })
  Type: Function
PuckApi.getSelectorForId:
  Example: () => ({ index: 0, zone: 'Flex-123:children' })
  Type: Function
PuckApi.getPermissions:
  Example: () => ({ delete: true })
  Type: Function
PuckApi.history:
  Example: {}
  Type: Object
PuckApi.refreshPermissions:
  Example: () => void
  Type: Function
PuckApi.selectedItem:
  Example: { type: "Heading", props: {id: "my-heading"} }
  Type: ComponentData
```

--------------------------------

TITLE: Puck Editor Integration: Data Migration
DESCRIPTION: Guide on migrating data between different versions or structures of Puck configurations.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Data Migration:

This guide provides instructions for migrating data within Puck configurations.
```

--------------------------------

TITLE: Rendered HTML Output with Puck Root and Component
DESCRIPTION: This HTML snippet shows the resulting markup when the example Puck configuration and data payload are rendered. It demonstrates how the root's `render` function wraps the `HeadingBlock` component's output, illustrating the final DOM structure.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: html
CODE:
```
<!-- root render -->
<div>
  <!-- HeadingBlock render -->
  <h1>Hello, world</h1>

  <!-- Remaining nodes -->
</div>
```

--------------------------------

TITLE: Puck Editor Extension: Composition
DESCRIPTION: Guide on extending Puck through component composition, combining smaller components to build larger ones.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Composition:

This guide explains how to extend Puck using component composition.
```

--------------------------------

TITLE: Asynchronously Update Component Permissions Based on Prop Changes
DESCRIPTION: This example illustrates an asynchronous `resolvePermissions` function that updates permissions only when a specific prop (`example`) changes. It returns `lastPermissions` if the prop is unchanged, otherwise it performs an expensive asynchronous operation.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: JavaScript
CODE:
```
const resolvePermissions = async ({ props }, { changed, lastPermissions }) => {
  if (!changed.example) {
    return lastPermissions; // Return the last permissions unless the `example` prop has changed
  }

  return await expensiveAsyncOperation();
};
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-item

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Example Puck ComponentConfig Definition
DESCRIPTION: Illustrates how to define a `ComponentConfig` object in Puck, including `fields` for data input and a `render` function for displaying the component's UI.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      render: ({ title }) => <h1>{title}</h1>,
    },
  },
};
```

--------------------------------

TITLE: DropZone with 'allow' Prop
DESCRIPTION: Example showing how to use the 'allow' prop to restrict which components can be dropped into the DropZone.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" allow={["HeadingBlock"]} />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: Extending Puck
DESCRIPTION: Guides on extending Puck's functionality, including composition, custom fields, field transforms, internal Puck API, theming (overview and fonts), plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/overview

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Guide on Puck composition.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Guide on creating custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Guide on field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Guide on the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Overview of theming.
  - Link: https://puckeditor.com/docs/extending-puck/theming/overview
  - Fonts:
    - Guide on theming fonts.
    - Link: https://puckeditor.com/docs/extending-puck/theming/fonts

Plugin API:
  - Guide on the Plugin API.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Guide on UI overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck ComponentConfig API Parameters Reference
DESCRIPTION: Detailed reference for all configurable parameters within Puck's `ComponentConfig` object, specifying their types, examples, and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
ComponentConfig Parameters:
  render(): Function (Required)
    Example: render: () => <div />
    Description: A function that renders the component's UI.
  fields: Object
    Example: fields: { title: { type: "text"} }
    Description: Defines the editable fields for the component.
  defaultProps: Object
    Example: defaultProps: { title: "Hello, world" }
    Description: Default property values for the component.
  inline: Boolean
    Example: inline: true
    Description: Specifies if the component should be rendered inline.
  label: String
    Example: label: "Heading Block"
    Description: A human-readable label for the component.
  metadata: Object
    Example: metadata: {}
    Description: Arbitrary metadata associated with the component.
  permissions(): Object
    Example: permissions: { delete: false }
    Description: Defines permissions for actions on the component.
  resolveData(): Object
    Example: resolveData: async ({ props }) => ({ props })
    Description: Asynchronously resolves data for the component.
  resolveFields(): Object
    Example: resolveFields: async ({ props }) => ({})
    Description: Asynchronously resolves fields for the component.
  resolvePermissions(): Object
    Example: resolvePermissions: async ({ props }) => ({})
    Description: Asynchronously resolves permissions for the component.
```

--------------------------------

TITLE: Integrating Puck
DESCRIPTION: Guides on integrating Puck into your React application, covering component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - Guide on configuring components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Guide on configuring the root of Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Guide on creating multi-column layouts.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Guide on using categories in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Guide on using dynamic props.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Guide on using dynamic fields.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Guide on integrating external data sources.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Guide on using React Server Components with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Guide on data migration for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Guide on using viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Guide on feature toggling in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Guide on using overlay portals.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck Editor Integration: Component Configuration
DESCRIPTION: Guide on configuring components when integrating Puck into a project, detailing how to define component properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Component Configuration:

This guide explains how to configure components for integration with Puck, including defining their properties and behavior within the editor.
```

--------------------------------

TITLE: PuckEditor `children` Prop API Documentation and React Example
DESCRIPTION: Provides API documentation for the `children` prop, detailing its type as `ReactNode` and its purpose as the default node for fields. Includes a React code example demonstrating its usage.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/fields

LANGUAGE: APIDOC
CODE:
```
Prop: children
Type: ReactNode
Description: The default node for the fields.
```

LANGUAGE: React
CODE:
```
<div />
```

--------------------------------

TITLE: Integrating Puck
DESCRIPTION: Guides on integrating Puck into your React application, covering component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/overview

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:

Component Configuration:
  - Guide on configuring components for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/component-configuration

Root Configuration:
  - Guide on configuring the root of Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/root-configuration

Multi-column Layouts:
  - Guide on creating multi-column layouts.
  - Link: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

Categories:
  - Guide on using categories in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/categories

Dynamic Props:
  - Guide on using dynamic props.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-props

Dynamic Fields:
  - Guide on using dynamic fields.
  - Link: https://puckeditor.com/docs/integrating-puck/dynamic-fields

External Data Sources:
  - Guide on integrating external data sources.
  - Link: https://puckeditor.com/docs/integrating-puck/external-data-sources

React Server Components:
  - Guide on using React Server Components with Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/server-components

Data Migration:
  - Guide on data migration for Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/data-migration

Viewports:
  - Guide on using viewports in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/viewports

Feature Toggling:
  - Guide on feature toggling in Puck.
  - Link: https://puckeditor.com/docs/integrating-puck/feature-toggling

Overlay Portals:
  - Guide on using overlay portals.
  - Link: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Integrating Puck - React Server Components
DESCRIPTION: Guide on using Puck with React Server Components for server-rendered content.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
React Server Components:
  - Utilizing Puck in conjunction with React Server Components.
  - Facilitates server-side rendering and improved performance.
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Integrating Puck - Overlay Portals
DESCRIPTION: Guide on using overlay portals for rendering UI elements outside the main component hierarchy in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Overlay Portals:
  - Rendering UI elements in a separate DOM subtree, often used for modals or tooltips.
  - Facilitates managing complex UI layering.
```

--------------------------------

TITLE: Puck Editor Integration: Data Migration
DESCRIPTION: Guide on migrating data between different versions or structures of Puck configurations.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Data Migration:

This guide provides instructions for migrating data within Puck configurations.
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/components

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Integrating Puck - React Server Components
DESCRIPTION: Guide on using Puck with React Server Components for server-rendered content.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
React Server Components:
  - Utilizing Puck in conjunction with React Server Components.
  - Facilitates server-side rendering and improved performance.
```

--------------------------------

TITLE: Puck Editor Integration: Component Configuration
DESCRIPTION: Guide on configuring components when integrating Puck into a project, detailing how to define component properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Component Configuration:

This guide explains how to configure components for integration with Puck, including defining their properties and behavior within the editor.
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/iframe

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Editor Component
DESCRIPTION: Demonstrates how to render the Puck editor component with basic configuration and initial data. This is the main entry point for using Puck in a React application.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
const config = {
  components: {},
};
const initialData = {
  content: [],
  root: {},
};
export function Editor() {
  return <Puck config={config} data={initialData} />;
}
```

--------------------------------

TITLE: Puck Editor Extension: Composition
DESCRIPTION: Guide on extending Puck through component composition, combining smaller components to build larger ones.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Composition:

This guide explains how to extend Puck using component composition.
```

--------------------------------

TITLE: Puck Editor Integration: Data Migration
DESCRIPTION: Guide on migrating data between different versions or structures of Puck configurations.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Data Migration:

This guide provides instructions for migrating data within Puck configurations.
```

--------------------------------

TITLE: Puck Editor Extension: Composition
DESCRIPTION: Guide on extending Puck through component composition, combining smaller components to build larger ones.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Composition:

This guide explains how to extend Puck using component composition.
```

--------------------------------

TITLE: DropZone with 'ref' Prop
DESCRIPTION: Example showing how to attach a React ref to the DropZone component.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        const ref = useRef();
        return (
          <div>
            <DropZone zone="my-content" ref={ref} />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/fields

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Integrating Puck - Root Configuration
DESCRIPTION: Details on setting up the root configuration for Puck, which governs the overall editor behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Root Configuration:
  - The main configuration object for a Puck instance.
  - Defines global settings, available components, and fields.
```

--------------------------------

TITLE: DropZone with 'minEmptyHeight' Prop
DESCRIPTION: Example demonstrating how to set the minimum height of an empty DropZone.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" minEmptyHeight={256} />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: ComponentConfig API Reference
DESCRIPTION: Comprehensive API documentation for the ComponentConfig, outlining all available parameters, their types, examples, and whether they are required. This includes render functions, fields, default properties, and more.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
ComponentConfig:
  params:
    render: Function (Required) - A render function to render your component. Receives props as defined in fields, and some internal Puck props.
      Example: `render: () => <div />`
    fields: Object - Defines the fields for the component.
      Example: `fields: { title: { type: "text"} }`
    defaultProps: Object - Sets default values for component props.
      Example: `defaultProps: { title: "Hello, world" }`
    inline: Boolean - Enables inline editing for the component.
      Example: `inline: true`
    label: String - The display label for the component.
      Example: `label: "Heading Block"`
    metadata: Object - Custom metadata for the component.
      Example: `metadata: {}`
    permissions: Object - Defines permissions for component actions.
      Example: `permissions: { delete: false }`
    resolveData: Function - Asynchronously resolves data for the component.
      Example: `resolveData: async ({ props }) => ({ props })`
    resolveFields: Function - Asynchronously resolves fields for the component.
      Example: `resolveFields: async ({ props }) => ({})`
    resolvePermissions: Function - Asynchronously resolves permissions for the component.
      Example: `resolvePermissions: async ({ props }) => ({})`

  requiredParams:
    render(props):
      description: A render function to render your component. Receives props as defined in `fields`, and some internal Puck props.
      example: |
        const config = {
          components: {
            HeadingBlock: {
              render: () => <h1>Hello, world</h1>,
            },
          },
        };
      renderProps:
        id: String - A unique identifier for the component. Auto-generated by default.
          Example: `button-1234`
        puck.dragRef: Function - A ref for drag and drop functionality.
          Example: `null`
        puck.isEditing: Boolean - Indicates if the component is currently being edited.
          Example: `false`
        puck.metadata: Object - Puck's internal metadata for the component.
          Example: `{}`
        puck.renderDropZone: Function - A function to render a drop zone for nested components.
          Example: `() => {}`
        ...props: Object - Any other props defined in the component's fields.
          Example: `{}`
```

--------------------------------

TITLE: Puck Editor Extension - Theming
DESCRIPTION: Guide on 'Theming' for extending Puck Editor. This section explains how to customize the visual theme and styling of the Puck editor interface.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Theming: https://puckeditor.com/docs/extending-puck/theming
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/outline

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Migrating Puck Component Configuration from DropZone to Slot Field
DESCRIPTION: This snippet illustrates the process of replacing a DropZone component instance with a slot field within Puck's component configuration. The 'Before' example shows the older DropZone usage, while the 'After' example demonstrates the new slot field definition, including defaultProps and the render function update to accommodate the slot's render function.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return <DropZone zone="items" allow={["HeadingBlock"]} />;
      },
    },
  },
};
```

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "slot",
        },
      },
      defaultProps: {
        items: [], // Slots support defaultProps and other APIs like resolveData
      },
      render: ({ items: Items }) => {
        return <Items allow={["HeadingBlock"]} />;
      },
    },
  },
};
```

--------------------------------

TITLE: Example: Applying Inline Styles with 'style' Prop
DESCRIPTION: Illustrates applying inline CSS styles to the DropZone component using the 'style' prop, such as '{ display: "flex" }', which merges with default styles.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" style={{ display: "flex" }} />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header-actions

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Integrating Puck - Overlay Portals
DESCRIPTION: Guide on using overlay portals for rendering UI elements outside the main component hierarchy in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Overlay Portals:
  - Rendering UI elements in a separate DOM subtree, often used for modals or tooltips.
  - Facilitates managing complex UI layering.
```

--------------------------------

TITLE: Puck Editor Integration - Data Migration
DESCRIPTION: Guide on 'Data Migration' strategies when integrating Puck Editor. This section provides information on migrating existing data to work with Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for configuring Puck, covering aspects like component settings, root configurations, and layout management.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  Details on how to configure individual components within Puck.

Root Configuration:
  Configuration for the root of the Puck editor instance.

Multi-column Layouts:
  Guidelines for creating multi-column layouts using Puck.

Categories:
  How to categorize components and fields in Puck.

Dynamic Props:
  Managing dynamic properties for components.

Dynamic Fields:
  Creating and using dynamic fields in Puck.

External Data Sources:
  Integrating external data sources with Puck.

React Server Components:
  Using Puck with React Server Components.

Data Migration:
  Strategies for migrating data within Puck.

Viewports:
  Configuring and managing viewports in Puck.

Feature Toggling:
  Implementing feature toggles within Puck.

Overlay Portals:
  Using overlay portals for UI elements.
```

--------------------------------

TITLE: Puck Plugin Example
DESCRIPTION: Demonstrates how to create and use a custom plugin with Puck. Plugins can modify the editor's behavior and appearance, such as overriding specific UI elements.

SOURCE: https://puckeditor.com/docs/api-reference/plugin

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
const MyPlugin = {
  overrides: {
    drawerItem: ({ name }) => (
      <div style={{ backgroundColor: "hotpink" }}>{name}</div>
    ),
  },
};
export function Editor() {
  return (
    <Puck
      // ...
      plugins={[MyPlugin]}
    />
  );
}
```

--------------------------------

TITLE: Using Puck.Outline in an Editor
DESCRIPTION: Example of how to use the Puck.Outline component within a React Editor component. It requires the PuckProvider to be set up.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
export function Editor() {
  return (
    <Puck>
      <Puck.Outline />
    </Puck>
  );
}
```

--------------------------------

TITLE: walkTree Function API Reference
DESCRIPTION: Detailed API documentation for the `walkTree` function, outlining its parameters (`data`, `config`, `callbackFn`) with their types, descriptions, and examples. It also specifies the structure and parameters of the `callbackFn` and the overall return type of `walkTree`.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: APIDOC
CODE:
```
walkTree(data, config, callbackFn)
  data: Data | ComponentData
    Description: The Data or ComponentData to traverse.
    Example: { root: {}, content: [] }
  config: Config
    Description: A Puck config object, used to determine which components contain slots.
    Example: { components: {} }
  callbackFn(content, options): ComponentData[] (optional return)
    Description: A callback function called for each slot. Receives an array of ComponentData. Optionally returns an updated array of ComponentData to update the content for this slot.
    Parameters for callbackFn:
      content: ComponentData[]
        Description: An array of ComponentData, containing all the nodes for this slot.
        Example: [{ type: "Heading", props: {} }]
      options: object
        Description: An object containing additional options
        Properties for options:
          parentId: string
            Description: The id of the parent component that defines this slot.
          propName: string
            Description: The name of the slot field.
    Returns for callbackFn: Optionally return an updated array of ComponentData objects.
Returns: Data | ComponentData
  Description: A new Data or ComponentData object populated with any values returned by the callbackFn.
```

--------------------------------

TITLE: DropZone with 'collisionAxis' Prop
DESCRIPTION: Example illustrating the use of the 'collisionAxis' prop to configure collision detection behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" collisionAxis="dynamic" />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration - Overlay Portals
DESCRIPTION: Guide on using 'Overlay Portals' when integrating Puck Editor. This section explains how to implement overlay portals for UI elements within Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: DropZone Component Props API Reference
DESCRIPTION: Comprehensive documentation of all properties available for the <DropZone> component, including their types, examples, and detailed descriptions of their functionality and usage.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: APIDOC
CODE:
```
DropZone Component Props:
- zone (String, Required):
    Example: "zone: \"my-zone\""
    Description: Set the zone identifier for the given DropZone. Must be unique within this component, but two different components can both define DropZones with the same zone value.
- allow (Array, Optional):
    Example: "allow: [\"HeadingBlock\"]"
    Description: Only allow specific components to be dragged into the DropZone.
- className (String, Optional):
    Example: "className: \"MyClass\""
    Description: Provide a className to the DropZone component. The default DropZone styles will still be applied.
- collisionAxis (String, Optional):
    Example: "collisionAxis: \"x\""
    Description: Configure which axis Puck will use for overlap collision detection. Options: 'x', 'y', 'dynamic'. Defaults are set based on the CSS layout of the parent.
- disallow (Array, Optional):
    Example: "disallow: [\"HeadingBlock\"]"
    Description: Allow all but specific components to be dragged into the DropZone. Any items in 'allow' will override 'disallow'.
- minEmptyHeight (Number, Optional):
    Example: "minEmptyHeight: 256"
    Description: The minimum height of the DropZone when empty, in pixels. Defaults to 128.
- ref (Ref, Optional):
    Example: "ref: ref"
    Description: A React ref, assigned to the root node of the DropZone.
- style (CSSProperties, Optional):
    Example: "style: {display: \"flex\"}"
    Description: Provide a style attribute to the DropZone. The default DropZone styles will still be applied.
```

--------------------------------

TITLE: Puck Integration - Component Configuration
DESCRIPTION: Guide on configuring components for use within Puck. This covers defining component properties and their editor representations.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Component Configuration:
  This guide explains how to configure your React components to work with Puck.
  Proper configuration allows the editor to manage component properties and rendering.
  
  Component Configuration Object:
    - name: string - Unique identifier for the component.
    - fields: Record<string, Field> - Defines the editable properties of the component.
      - Example Field:
        {
          type: 'text',
          label: 'Title',
          defaultValue: 'Default Title'
        }
    - render: React.FC<Props> - The React component to render in the editor canvas.
    - category?: string - Organizes components into categories in the editor's UI.
    - icon?: string - An icon to represent the component.
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-item

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: DropZone with 'className' Prop
DESCRIPTION: Example demonstrating how to apply a custom CSS class to the DropZone component.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" className="MyComponent" />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Integration - Data Migration
DESCRIPTION: Guide on migrating data for Puck components. This covers strategies for updating component data structures over time.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Data Migration:
  This guide provides strategies for migrating data when your Puck component structures change.
  Ensure data integrity and compatibility after updates.
  
  Migration Strategies:
    - Versioning Component Data:
      - Include a `version` field in your component's data structure.
      - Implement migration functions that check the version and transform the data.
    - Using `resolve` for on-the-fly migration:
      - The `resolve` function in field configurations can be used to migrate data as it's loaded.
  
  Example Migration Logic (within component definition):
    const myComponentConfig = {
      name: 'MyComponent',
      fields: { /* ... */ },
      render: MyComponent,
      migrate: (data) => {
        if (data.version === 1) {
          // Transform data from version 1 to version 2
          return { ...data, newField: 'default', version: 2 };
        }
        return data;
      }
    };
  
  Puck automatically calls the `migrate` function if provided when loading component data.
```

--------------------------------

TITLE: Extending Puck
DESCRIPTION: Guides on extending Puck's functionality, including composition, custom fields, field transforms, internal Puck API, theming (overview and fonts), plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
Extending Puck:

Composition:
  - Guide on Puck composition.
  - Link: https://puckeditor.com/docs/extending-puck/composition

Custom Fields:
  - Guide on creating custom fields.
  - Link: https://puckeditor.com/docs/extending-puck/custom-fields

Field Transforms:
  - Guide on field transforms.
  - Link: https://puckeditor.com/docs/extending-puck/field-transforms

Internal Puck API:
  - Guide on the internal Puck API.
  - Link: https://puckeditor.com/docs/extending-puck/internal-puck-api

Theming:
  - Overview of theming.
  - Link: https://puckeditor.com/docs/extending-puck/theming/overview
  - Fonts:
    - Guide on theming fonts.
    - Link: https://puckeditor.com/docs/extending-puck/theming/fonts

Plugin API:
  - Guide on the Plugin API.
  - Link: https://puckeditor.com/docs/extending-puck/plugins

UI Overrides:
  - Guide on UI overrides.
  - Link: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Extension - Theming
DESCRIPTION: Guide on customizing the Puck editor's theme. This covers changing colors, fonts, and other visual aspects.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Extending Puck - Theming:
  This guide explains how to customize the visual theme of the Puck editor.
  Apply your brand's styling to the editor interface.
  
  Theming API:
    - Use the `setTheme` function from the Puck API to apply custom theme settings.
    - Define properties like colors, fonts, spacing, etc.
  
  Example:
    import { PuckApi } from '@measured/puck';

    const customTheme = {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        text: '#333',
        background: '#f8f9fa',
        border: '#dee2e6'
      },
      fonts: {
        body: 'Arial, sans-serif',
        heading: 'Georgia, serif'
      },
      spacing: {
        small: '8px',
        medium: '16px',
        large: '24px'
      }
    };

    // Assuming 'puckApi' is your instance of PuckApi
    // puckApi.setTheme(customTheme);
  
  You can also provide theme settings during Puck initialization.
```

--------------------------------

TITLE: DropZone with 'disallow' Prop
DESCRIPTION: Example showing how to use the 'disallow' prop to prevent specific components from being dropped into the DropZone.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: jsx
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" disallow={["HeadingBlock"]} />
          </div>
        );
      },
    },
  },
};
```

--------------------------------

TITLE: JavaScript Example: Accessing PuckApi appState Data
DESCRIPTION: Illustrates how to programmatically access and log the data property from the appState object, which is exposed through the PuckApi.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
console.log(appState.data);
// { content: [], root: {}, zones: {} }
```

--------------------------------

TITLE: Puck Editor Integration: Component Configuration
DESCRIPTION: Guide on configuring components when integrating Puck into a project, detailing how to define component properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Component Configuration:

This guide explains how to configure components for integration with Puck, including defining their properties and behavior within the editor.
```

--------------------------------

TITLE: Puck Editor Functions API
DESCRIPTION: API documentation for Puck Editor functions. This includes details on registerOverlayPortal, resolveAllData, setDeep, transformProps, useGetPuck, usePuck, and walkTree.

SOURCE: https://puckeditor.com/docs/api-reference/functions/register-overlay-portal

LANGUAGE: APIDOC
CODE:
```
registerOverlayPortal(el: HTMLElement, opts?: Config)
  Registers a node as an Overlay Portal, enabling interaction beneath the Puck overlay.
  Args:
    el: The element to turn into a portal. Will do nothing if null or undefined.
    opts: Optional configuration object.
      disableDrag: Disable triggering a drag of the parent component when interacting with this element. Defaults to false.
      disableDragOnFocus: Disable triggering a drag of the parent component when interacting with this element once it is focused. Drag is disabled following a short delay after focusing. Defaults to true.

resolveAllData()
  Resolves all data within the Puck editor.

setDeep(path: string, value: any)
  Sets a value deep within the Puck data structure.

transformProps(props: object)
  Transforms the props of a component.

useGetPuck()
  Hook to get the Puck instance.

usePuck()
  Hook to access Puck context.

walkTree(callback: (node: any) => void)
  Walks the Puck component tree, executing a callback for each node.
```

--------------------------------

TITLE: Puck Editor Integration: Component Configuration
DESCRIPTION: Guide on configuring components when integrating Puck into a project, detailing how to define component properties and behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Component Configuration:

This guide explains how to configure components for integration with Puck, including defining their properties and behavior within the editor.
```

--------------------------------

TITLE: Puck Editor Extension - Composition
DESCRIPTION: Guide on 'Composition' for extending Puck Editor. This section details how to compose complex components or functionalities using Puck's extension capabilities.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Composition: https://puckeditor.com/docs/extending-puck/composition
```

--------------------------------

TITLE: Puck Editor Component Read-Only Field Configuration Example (JSON)
DESCRIPTION: This example demonstrates how to specify read-only fields within a Puck Editor component's data model using the "readOnly" property. It shows how to set the "title" field of a "HeadingBlock" component to read-only, preventing user modification.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: JSON
CODE:
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234",
    "title": "Hello, world"
  },
  "readOnly": {
    "title": true
  }
}
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/fields

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Extending Puck - UI Overrides
DESCRIPTION: Guide on overriding default UI elements and behaviors within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
UI Overrides:
  - Customizing the user interface of the Puck editor.
  - Allows for modifying components, styles, and layouts.
```

--------------------------------

TITLE: Puck Editor Extension: Composition
DESCRIPTION: Guide on extending Puck through component composition, combining smaller components to build larger ones.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Composition:

This guide explains how to extend Puck using component composition.
```

--------------------------------

TITLE: Extending Puck - Field Transforms
DESCRIPTION: Guide on using field transforms to modify data entered into Puck fields.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: markdown
CODE:
```
## Field Transforms

Field transforms allow you to automatically modify the value of a field before it's saved or used by the component.

### How it Works:

You can provide a `transform` property to a field definition. This can be a string referencing a built-in transform or a custom function.

### Built-in Transforms:

*   `toLowerCase`: Converts the input string to lowercase.
*   `toUpperCase`: Converts the input string to uppercase.
*   `trim`: Removes whitespace from the beginning and end of a string.

### Custom Transforms:

You can also define your own transformation logic using a JavaScript function.

### Example:

```javascript
{
  name: 'formattedTitle',
  type: 'text',
  label: 'Title',
  transform: 'toLowerCase', // Use built-in transform
}

{
  name: 'processedDescription',
  type: 'textarea',
  label: 'Description',
  transform: (value) => {
    // Custom logic: capitalize first letter and trim whitespace
    if (!value) return '';
    const trimmed = value.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  },
}
```
```

--------------------------------

TITLE: DropZone Component API Reference
DESCRIPTION: This section details the properties available for the DropZone component. It includes required and optional props, their types, and usage examples.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: APIDOC
CODE:
```
DropZone Props:

Required Props:
- zone (String): Required. Set the zone identifier for the given DropZone. Must be unique within this component, but two different components can both define DropZones with the same `zone` value.

Optional Props:
- allow (Array): Only allow specific components to be dragged into the DropZone.
- className (String): Provide a className to the DropZone component. The default DropZone styles will still be applied.
- collisionAxis (String): Configure which axis Puck will use for overlap collision detection. Options: 'x', 'y', 'dynamic'. Defaults are based on parent CSS layout (grid: 'dynamic', flex (row): 'x', inline/inline-block: 'x', else: 'y').
- disallow (Array): Allow all but specific components to be dragged into the DropZone. Any items in `allow` will override `disallow`.
- minEmptyHeight (Number): The minimum height of the DropZone when empty, in pixels. Defaults to `128`.
- ref (Ref): A React ref, assigned to the root node of the DropZone.
- style (CSSProperties): Apply inline styles to the DropZone component.
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section would explain how to configure Puck's behavior, settings, and integration points within a project.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Configuration: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Get ComponentData by ID
DESCRIPTION: Retrieve an item’s ComponentData directly by its unique component ID.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getItemById("HeadingBlock-123");
// { type: "HeadingBlock", props: {} }
```

--------------------------------

TITLE: Integrating Puck - Root Configuration
DESCRIPTION: Details on setting up the root configuration for Puck, which governs the overall editor behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Root Configuration:
  - The main configuration object for a Puck instance.
  - Defines global settings, available components, and fields.
```

--------------------------------

TITLE: Puck Editor Extension: Composition
DESCRIPTION: Guide on extending Puck through component composition, combining smaller components to build larger ones.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Composition:

This guide explains how to extend Puck using component composition.
```

--------------------------------

TITLE: Server Render Example (Next.js App Router)
DESCRIPTION: This TypeScript React code demonstrates how to render a Puck component configuration on the server using a Next.js app router. It imports the server-specific config and passes it to the Render component along with server-fetched data.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: tsx
CODE:
```
import { config } from "../puck.config.server.tsx";

export default async function Page() {
  const data = await getData(); // Some server function
  return <Render data={data} config={config} />;
}
```

--------------------------------

TITLE: resolvePermissions Function Signature and Arguments
DESCRIPTION: Defines the `resolvePermissions` function signature and its primary arguments, `data` and `params`, along with their types and example structures.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
resolvePermissions(data, params)
  data: Object - Example: { props: { title: "Hello, world" }, readOnly: {} }
  params: Object - Example: { appState: {}, changed: {}, permissions: {}, lastData: {}, lastPermissions: {} }
```

--------------------------------

TITLE: Drawer.Item Component API Reference
DESCRIPTION: Defines the properties available for the <Drawer.Item> component, including their types, examples, and detailed descriptions for usage within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
<Drawer.Item> Component Props:
  name:
    Type: String
    Status: Required
    Example: "name: \"Orange\""
    Description: The name of this drawer item. This will be rendered on the item by default. Will be used as the id, unless otherwise specified.
  children:
    Type: Function
    Status: Optional
    Example: "children: () => <div />"
    Description: A custom render function to render inside the component.
    Render Props:
      children:
        Type: String
        Example: "children: <div />"
        Description: The original node for the drawer item.
  id:
    Type: String
    Status: Optional
    Example: "id: \"OrangeComponent\""
    Description: A unique id for this drawer item. Defaults to the value of name. If using the <Drawer> as a component list to be dragged into <Puck.Preview>, this should be the key of a component defined in the Config.
  isDragDisabled:
    Type: Boolean
    Status: Optional
    Example: "isDragDisabled: false"
    Description: Whether or not this item is disabled.
```

--------------------------------

TITLE: Integrating Puck - Dynamic Props
DESCRIPTION: Guide on using dynamic props to manage component properties that change based on context or data.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Dynamic Props:
  - Props whose values are determined at runtime.
  - Allows for more flexible and data-driven component behavior.
```

--------------------------------

TITLE: Extending Puck - UI Overrides
DESCRIPTION: Guide on overriding default UI elements and behaviors within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
UI Overrides:
  - Customizing the user interface of the Puck editor.
  - Allows for modifying components, styles, and layouts.
```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/field-label

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Get Selected Item
DESCRIPTION: Retrieves the currently selected item within the Puck Editor application state.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: javascript
CODE:
```
console.log(selectedItem);
// { type: "Heading", props: {id: "my-heading"} }
```

--------------------------------

TITLE: Data Model Comparison: DropZone vs. Slot
DESCRIPTION: Illustrates the difference in data structure between using DropZones and the new inline, recursive data model provided by Slots in Puck Editor.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "Grid",
      "props": {
        "id": "Grid-12345"
      }
    }
  ],
  "zones": {
    "Grid-12345:items": [
      {
        "type": "HeadingBlock",
        "props": {
          "id": "Heading-12345",
          "title": "Hello, world"
        }
      }
    ]
  }
}

{
  "content": [
    {
      "type": "Grid",
      "props": {
        "id": "Grid-12345",
        "items": [
          {
            "type": "HeadingBlock",
            "props": {
              "id": "Heading-12345",
              "title": "Hello, world"
            }
          }
        ]
      }
    }
  ]
}
```

--------------------------------

TITLE: Integrating Puck - Dynamic Props
DESCRIPTION: Guide on using dynamic props to manage component properties that change based on context or data.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Dynamic Props:
  - Props whose values are determined at runtime.
  - Allows for more flexible and data-driven component behavior.
```

--------------------------------

TITLE: Puck Editor Integration - Viewports
DESCRIPTION: Guide on configuring 'Viewports' when integrating Puck Editor. This section explains how to define different screen sizes or device views for content editing.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Viewports: https://puckeditor.com/docs/integrating-puck/viewports
```

--------------------------------

TITLE: Puck Editor Integration - Multi-column Layouts
DESCRIPTION: Guide on creating 'Multi-column Layouts' when integrating Puck Editor. This section covers how to structure content with multiple columns using Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/getting-started

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components.
  - Details on how to define and use components within Puck.

Configuration:
  - Documentation for Puck's configuration options.
  - Covers root configuration and component-specific settings.

Fields:
  - Information on available field types and their usage.
  - How to create custom fields for your components.

Overrides:
  - Details on how to override default Puck behaviors or UI elements.

Actions:
  - Reference for available actions within Puck.
  - How to trigger actions and manage workflows.

FieldTransforms:
  - Documentation for field transform functions.
  - How to manipulate field data.

Permissions:
  - Information on managing permissions within Puck.

Plugin:
  - Details on the Puck Plugin API.
  - How to extend Puck's functionality with plugins.

PuckApi:
  - Reference for the core Puck API object.
  - Methods and properties for interacting with Puck programmatically.

Theming:
  - Documentation on how to theme Puck.
  - Customizing the visual appearance of the editor.
```

--------------------------------

TITLE: Example: Setting Minimum Empty Height with 'minEmptyHeight' Prop
DESCRIPTION: Shows how to set the minimum height of an empty DropZone in pixels using the 'minEmptyHeight' prop, for instance, '256'.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" minEmptyHeight={256} />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Minimal Puck Data Payload Example
DESCRIPTION: This JSON object illustrates a basic data structure for a Puck page, containing a single 'HeadingBlock' component within the 'content' array and an empty 'root' object. It represents the input data that Puck processes for rendering.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234"
      }
    }
  ],
  "root": {}
}
```

--------------------------------

TITLE: Initializing Puck Editor with Data
DESCRIPTION: This snippet demonstrates how to pass initial `data` to the Puck editor. It shows the structure for `content` and `root` properties, including how to define a block with its type and properties, ensuring the editor loads with predefined content.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      data={{
        content: [
          {
            props: { children: "Hello, world", id: "id" },
            type: "HeadingBlock",
          },
        ],
        root: {},
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Example JSON structure for ItemSelector
DESCRIPTION: Illustrates the typical structure of an ItemSelector object, showing its index and zone properties.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: JSON
CODE:
```
{
  "index": 0,
  "zone": "Flex-123:children"
}
```

--------------------------------

TITLE: Configuring Puck with Custom Components
DESCRIPTION: This example shows how to provide a `config` prop to the Puck editor, defining a custom `HeadingBlock` component. It illustrates how to specify fields and a render function for a component within Puck's configuration, enabling extensibility.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      config={{
        components: {
          HeadingBlock: {
            fields: {
              children: {
                type: "text",
              },
            },
            render: ({ children }) => {
              return <h1>{children}</h1>;
            },
          },
        },
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Puck Editor Integration - Categories
DESCRIPTION: Guide on using 'Categories' for organizing components when integrating Puck Editor. This section explains how to group components into categories for better management.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Categories: https://puckeditor.com/docs/integrating-puck/categories
```

--------------------------------

TITLE: Puck API Reference: Drawer.Item Component
DESCRIPTION: Provides detailed API documentation for the `<Drawer.Item>` component in Puck. It outlines the required and optional props, their types, and usage examples.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
<Drawer.Item>
  An item that can be dragged from a [`<Drawer>`](https://puckeditor.com/docs/api-reference/components/drawer).

  ## Props
  Prop | Example | Type | Status
  ---|---|---|---
  [`name`](https://puckeditor.com/docs/api-reference/components/drawer-item#name) | `name: "Orange"` | String | Required
  [`children`](https://puckeditor.com/docs/api-reference/components/drawer-item#children) | `children: () => <div />` | Function | -
  [`id`](https://puckeditor.com/docs/api-reference/components/drawer-item#id) | `id: "OrangeComponent"` | String | -
  [`isDragDisabled`](https://puckeditor.com/docs/api-reference/components/drawer-item#isdragdisabled) | `isDragDisabled: false` | Boolean | -

  ## Required props
  ### `name`
  The name of this drawer item.
  * This will be rendered on the item by default.
  * Will be used as the `id`, unless otherwise specified

  ## Optional props
  (No optional props listed in the provided text)
```

--------------------------------

TITLE: Puck Editor Integration: Dynamic Props
DESCRIPTION: Guide on using dynamic props to enable components to adapt their properties based on context or data within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Dynamic Props:

This guide explains how to use dynamic props to make components adaptable within Puck.
```

--------------------------------

TITLE: Puck Editor Configuration API
DESCRIPTION: Documentation for Puck Editor's configuration objects. This includes the main configuration object that describes what Puck can render and the configuration for each component defined within the main config.

SOURCE: https://puckeditor.com/docs/api-reference/configuration

LANGUAGE: APIDOC
CODE:
```
API Reference
Configuration

# Configuration

*   [Config](https://puckeditor.com/docs/api-reference/configuration/config) - The main configuration object describing what Puck can render.
*   [ComponentConfig](https://puckeditor.com/docs/api-reference/configuration/component-config) - The configuration of each component defined in the main config.
```

--------------------------------

TITLE: Example of Puck Component Composition
DESCRIPTION: This code demonstrates how to create a custom editor layout by providing children to the <Puck> component. It sets up a two-column grid displaying the drag-and-drop preview and the component list side-by-side, enabling a highly customized user interface.

SOURCE: https://puckeditor.com/docs/extending-puck/composition

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gridGap: 16 }}
      >
        <div>
          {/* Render the drag-and-drop preview */}
          <Puck.Preview />
        </div>
        <div>
          {/* Render the component list */}
          <Puck.Components />
        </div>
      </div>
    </Puck>
  );
}
```

--------------------------------

TITLE: Setting Permissions for a Specific Instance
DESCRIPTION: Example of how to use resolvePermissions to conditionally disable the 'delete' permission for a component instance with a specific ID.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    MyComponent: {
      resolvePermissions: (data, { permissions }) => {
        if (data.props.id === "MyComponent-1234") {
          return {
            delete: false, // Disable deletion on component with id MyComponent-1234
          };
        }
        return { permissions }; // Fallback to inherited permissions
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Get item selector by ID
DESCRIPTION: Obtain an item’s selector (index and zone) using its component ID.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getSelectorForId("HeadingBlock-123");
// { index: 0, zone: "Flex-123:children" }
```

--------------------------------

TITLE: Extending Puck - Field Transforms
DESCRIPTION: Guide on implementing custom field transforms to modify data processed by Puck fields.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Field Transforms:
  - Custom functions to manipulate data within Puck fields.
  - Used for data validation, formatting, or enrichment.
```

--------------------------------

TITLE: Conditional Permission Update with Async Operation
DESCRIPTION: Demonstrates an asynchronous approach to updating permissions, only re-calculating when a specific prop ('example') has changed.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: javascript
CODE:
```
const resolvePermissions = async ({ props }, { changed, lastPermissions }) => {
  if (!changed.example) {
    return lastPermissions; // Return the last permissions unless the `example` prop has changed
  }
  return await expensiveAsyncOperation();
};
```

--------------------------------

TITLE: Puck ActionBar API Reference
DESCRIPTION: Detailed API documentation for the Puck ActionBar component, including its props, their types, and usage examples. It outlines required and optional properties for customizing the ActionBar.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
<ActionBar>
  Render the Puck ActionBar. Use this when overriding the [actionBar](https://puckeditor.com/docs/api-reference/overrides/action-bar).

  Props:
    children: ReactNode (Required) - The children for the ActionBar. Normally a fragment of [<ActionBar.Action> components](https://puckeditor.com/docs/api-reference/components/action-bar-action). If this is a fragment, it will be rendered in a flex row.
    label: String (Required) - The label for the ActionBar.

  Example Usage:
  <ActionBar label="Actions">
    <ActionBar.Group>
      <ActionBar.Action onClick={() => console.log("Clicked!")}>
        ★
      </ActionBar.Action>
    </ActionBar.Group>
  </ActionBar>
```

--------------------------------

TITLE: Get Permissions for Root
DESCRIPTION: Retrieves permissions for the root element of the application. This is configured via the `permissions` parameter in the component configuration.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: javascript
CODE:
```
getPermissions({ root: true });
// { delete: false }
```

--------------------------------

TITLE: FieldLabel Component Props API Reference
DESCRIPTION: This section details the available properties for the `FieldLabel` component, including their types, examples, status (required/optional), and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: APIDOC
CODE:
```
FieldLabel Component Props:
  label:
    Type: String
    Status: Required
    Description: The label string for the fields.
  children:
    Type: ReactNode
    Status: Optional
    Description: A node to render inside the FieldLabel’s internal <label> element. You can also define your input element as a sibling.
  className:
    Type: String
    Status: Optional
    Description: Define a custom class for the field label.
  el:
    Type: "label" | "div"
    Status: Optional
    Default: "label"
    Description: Specify whether to render a label or div.
  icon:
    Type: ReactNode
    Status: Optional
    Description: Render an icon before the label text. Puck uses lucide-react internally.
  readOnly:
    Type: Boolean
    Status: Optional
    Description: Indicate to the user that this field is in a read-only state by showing a padlock icon to the right of the text.
```

--------------------------------

TITLE: Extending Puck - Field Transforms
DESCRIPTION: Guide on implementing custom field transforms to modify data processed by Puck fields.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Field Transforms:
  - Custom functions to manipulate data within Puck fields.
  - Used for data validation, formatting, or enrichment.
```

--------------------------------

TITLE: Puck Integration - External Data Sources
DESCRIPTION: Guide on integrating external data sources with Puck components. This allows components to fetch and display data from APIs.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - External Data Sources:
  This guide explains how to connect Puck components to external data sources.
  Fetch data from APIs or databases to populate component properties.
  
  Fetching Data:
    - Use the `resolve` function in field configurations or within your component's logic.
    - The `resolve` function can be asynchronous to fetch data.
  
  Example Component Render Function:
    const MyDataComponent = ({ apiUrl }) => {
      const [data, setData] = React.useState(null);
      React.useEffect(() => {
        fetch(apiUrl).then(res => res.json()).then(setData);
      }, [apiUrl]);

      if (!data) return <div>Loading...</div>;
      return <div>{data.message}</div>;
    };
  
  Example Field Configuration for API URL:
    {
      type: 'text',
      label: 'API URL',
      name: 'apiUrl',
      defaultValue: '/api/data'
    }
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/field-label

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Editor Integration: Dynamic Props
DESCRIPTION: Guide on using dynamic props to enable components to adapt their properties based on context or data within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Dynamic Props:

This guide explains how to use dynamic props to make components adaptable within Puck.
```

--------------------------------

TITLE: Integrating Puck
DESCRIPTION: Guides on integrating Puck into your React application, covering various aspects like component configuration, root configuration, multi-column layouts, dynamic props and fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/fonts

LANGUAGE: javascript
CODE:
```
// Example: Component Configuration
// Define how a component should be configured within Puck.

// Example: Root Configuration
// Set up the root configuration for your Puck editor instance.

// Example: Multi-column Layouts
// Implement multi-column layouts for your content.

// Example: Dynamic Props
// Utilize dynamic props to make components more flexible.

// Example: Dynamic Fields
// Create dynamic fields for user input.

// Example: External Data Sources
// Connect Puck to external data sources.

// Example: React Server Components
// Integrate with React Server Components.

// Example: Data Migration
// Handle data migration scenarios.

// Example: Viewports
// Define and manage different viewports.

// Example: Feature Toggling
// Implement feature toggling within Puck.
```

--------------------------------

TITLE: ActionBar.Label Component Props Reference
DESCRIPTION: Defines the available properties for the `<ActionBar.Label>` component. It lists the property name, example usage, data type, and its status (e.g., required).

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
ActionBar.Label Props:
  label:
    Type: String
    Status: Required
    Description: The label text to be displayed.
```

--------------------------------

TITLE: Puck Editor Integration: Dynamic Props
DESCRIPTION: Guide on using dynamic props to enable components to adapt their properties based on context or data within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Dynamic Props:

This guide explains how to use dynamic props to make components adaptable within Puck.
```

--------------------------------

TITLE: Configure 'getItemSummary' for Array Field
DESCRIPTION: Example showing how to provide a custom function to generate a summary label for each item in an array field in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          },
          getItemSummary: (item) => item.title || "Item"
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Details on how to configure Puck, including root configuration and component-specific settings.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Puck Configuration:

Root Configuration:
  - Defines the overall settings for the Puck editor instance.

Component Configuration:
  - Specifies properties and behaviors for individual components within Puck.
```

--------------------------------

TITLE: Configure 'type' Parameter for Array Field
DESCRIPTION: Example demonstrating the required 'type' parameter set to 'array' for defining an array field in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          }
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Functions API Documentation
DESCRIPTION: Comprehensive documentation for Puck Editor's core functions, detailing their purpose, parameters, and usage examples for data manipulation, state management, and rendering.

SOURCE: https://puckeditor.com/docs/api-reference/functions/migrate

LANGUAGE: APIDOC
CODE:
```
PuckEditor Functions:

migrate(data: Data, config?: Config, migrationOptions?: MigrationOptions): Data
  - Migrates the Data payload to the latest shape, automatically transforming deprecated data.
  - Supports migrating root data to props and DropZones to slots.
  - Parameters:
    - data: The data payload to migrate. Required.
    - config: Configuration object for migrations. Optional.
    - migrationOptions: Options for controlling migration behavior. Optional.
  - Example:
    import { migrate } from "@measured/puck";
    migrate(legacyData);

registerOverlayPortal(portal: React.ReactNode, id: string): void
  - Registers an overlay portal with a unique ID.
  - Parameters:
    - portal: The React node to render as the portal.
    - id: A unique identifier for the portal.

resolveAllData(data: Data, config?: Config): Data
  - Resolves all data within the Puck editor, applying transformations and configurations.
  - Parameters:
    - data: The data payload to resolve.
    - config: Configuration object for data resolution. Optional.

setDeep(obj: Record<string, any>, path: string[], value: any): Record<string, any>
  - Sets a value deep within a nested object using a path array.
  - Parameters:
    - obj: The object to modify.
    - path: An array of strings representing the path to the value.
    - value: The new value to set.
  - Returns: The modified object.

transformProps(props: Record<string, any>, transform: (props: Record<string, any>) => Record<string, any>): Record<string, any>
  - Transforms the props of a component using a provided transform function.
  - Parameters:
    - props: The component's props.
    - transform: A function that takes props and returns transformed props.
  - Returns: The transformed props.

useGetPuck(): PuckInterface
  - Hook to get the Puck editor interface instance.
  - Returns: The Puck editor interface.

usePuck(): PuckInterface
  - Hook to access the Puck editor context.
  - Returns: The Puck editor interface.

walkTree(data: Data, callback: (node: DataNode) => void): void
  - Traverses the data tree and executes a callback for each node.
  - Parameters:
    - data: The data tree to traverse.
    - callback: A function to execute for each node.

```

--------------------------------

TITLE: Puck Configuration with Client Components
DESCRIPTION: Configuration file for Puck, defining components and their fields. It demonstrates how to set up a 'HeadingBlock' component, including its properties and default values, for use within a server-side rendering context.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: tsx
CODE:
```
import type { Config } from "@measured/puck";
import type { HeadingBlockProps } from "./components/HeadingBlock";
import HeadingBlock from "./components/HeadingBlock";

type Props = {
  HeadingBlock: HeadingBlockProps;
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
      // You must call the component, rather than passing it in directly. This will change in the future.
      render: ({ title }) => <HeadingBlock title={title} />,
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Integration - Component Configuration
DESCRIPTION: Guide on 'Component Configuration' for integrating Puck Editor. This section details how to configure individual React components to work seamlessly within Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
```

--------------------------------

TITLE: Example: Restricting Components with 'allow' Prop
DESCRIPTION: Shows how to use the 'allow' prop to restrict the types of components that can be dragged into the DropZone, accepting an array of component names like '["HeadingBlock"]'.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" allow={["HeadingBlock"]} />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Integration - Dynamic Props
DESCRIPTION: Guide on using dynamic props within Puck components. This allows props to be sourced from external data or context.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Dynamic Props:
  This guide explains how to use dynamic props in your Puck components.
  Dynamic props enable components to receive data from external sources or context.
  
  Defining Dynamic Props:
    - Within a component's `fields` configuration, you can specify a `resolve` function.
    - The `resolve` function receives context and should return the dynamic prop value.
  
  Example Field Configuration:
    {
      type: 'text',
      label: 'User Name',
      resolve: async (context) => {
        const user = await fetchUserFromAPI(context.userId);
        return user.name;
      }
    }
  
  The `context` object typically includes information like `userId`, `data`, etc.
```

--------------------------------

TITLE: Configure 'defaultItemProps' for Array Field
DESCRIPTION: Example demonstrating how to set default property values for new items added to an array field in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          },
          defaultItemProps: {
            title: "Hello, world"
          }
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Array Field Type Parameters Reference
DESCRIPTION: Detailed reference for all configurable parameters of the 'array' field type in Puck Editor, including type, status, and examples.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: APIDOC
CODE:
```
ArrayFieldType:
  Properties:
    - type:
        Type: "string"
        Value: "\"array\""
        Status: "Required"
        Description: "The type of the field. Must be \"array\" for Array fields."
    - arrayFields:
        Type: "Object"
        Status: "Required"
        Description: "Describes the fields for each item in the array. Shares an API with `fields`. Can include any field type, including nested array fields."
        Example: "{ title: { type: \"text\" } }"
    - defaultItemProps:
        Type: "Object"
        Status: "Optional"
        Description: "Sets the default values when a new item is added to the array."
        Example: "{ title: \"Hello, world\" }"
    - getItemSummary:
        Type: "Function"
        Status: "Optional"
        Description: "A function to get a label of each item in the array."
        Parameters:
          - item: "The current item object."
          - index: "The index of the current item."
        Returns: "string (summary label)"
        Example: "(item) => item.title"
    - max:
        Type: "Number"
        Status: "Optional"
        Description: "The maximum amount of items allowed in the array."
        Example: "3"
    - min:
        Type: "Number"
        Status: "Optional"
        Description: "The minimum amount of items allowed in the array."
        Example: "1"
```

--------------------------------

TITLE: Puck Editor Integration: Dynamic Props
DESCRIPTION: Guide on using dynamic props to enable components to adapt their properties based on context or data within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Dynamic Props:

This guide explains how to use dynamic props to make components adaptable within Puck.
```

--------------------------------

TITLE: Puck Integration - Feature Toggling
DESCRIPTION: Guide on implementing feature toggling within Puck. This allows enabling or disabling specific features or components.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Feature Toggling:
  This guide covers implementing feature toggling within your Puck integration.
  Control the availability of components or features based on certain conditions.
  
  Methods for Feature Toggling:
    1. Conditional Rendering in Components:
       - Within your React component's render method, check a feature flag before rendering.
    2. Conditional Registration of Components:
       - Based on configuration or environment variables, conditionally register components using `registerComponent`.
    3. Using Permissions:
       - Leverage the `permissions` API to control access to specific components or actions.
  
  Example using Permissions:
    const userPermissions = {
      allowedComponents: ['Text', 'Button'] // Only allow Text and Button
    };
    setPuckPermissions(userPermissions);
```

--------------------------------

TITLE: Puck Extension - Field Transforms
DESCRIPTION: Guide on implementing field transforms in Puck. This allows modifying field values before they are processed or saved.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Extending Puck - Field Transforms:
  This guide explains how to implement field transforms in Puck.
  Transforms allow you to modify field values dynamically, such as formatting or validation.
  
  Implementing Field Transforms:
    - Add a `transform` function to your field's configuration.
    - This function receives the field's value and can return a transformed value.
  
  Example:
    const capitalizeTransform = (value) => {
      if (typeof value === 'string') {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
      return value;
    };

    // In your component configuration:
    // fields: {
    //   title: {
    //     type: 'text',
    //     label: 'Title',
    //     transform: capitalizeTransform
    //   }
    // }
```

--------------------------------

TITLE: Extending Puck - Custom Fields
DESCRIPTION: Guide on creating custom fields for Puck components. This allows for specialized input types beyond the built-in options.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: markdown
CODE:
```
## Custom Fields

Puck allows you to create your own custom field types to handle specific data inputs for your components.

### Creating a Custom Field:

To create a custom field, you typically define a React component that accepts certain props provided by Puck, such as `value`, `onChange`, and `fieldDefinition`.

### Example:

Let's create a simple `RangeSlider` field:

```javascript
// CustomFields.jsx
import React from 'react';

export const RangeSliderField = ({ name, label, value, onChange, fieldDefinition }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="range"
        id={name}
        name={name}
        min={fieldDefinition.min || 0}
        max={fieldDefinition.max || 100}
        value={value || fieldDefinition.defaultValue || 0}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{value}</span>
    </div>
  );
};

// In your Puck configuration:
{
  fields: {
    rangeSlider: RangeSliderField,
  },
  components: {
    MyComponent: {
      component: MyComponent,
      name: 'My Component',
      fields: [
        {
          name: 'sliderValue',
          type: 'rangeSlider', // Use the registered custom field type
          label: 'Slider Value',
          min: 10,
          max: 50,
        },
      ],
    },
  },
}
```
```

--------------------------------

TITLE: Puck Editor Integration: Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Viewports:

This guide explains how to configure and manage viewports for responsive design in Puck.
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Details on how to configure Puck, including root configuration and component-specific settings.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Configuration:

Root Configuration:
  - Defines the overall settings for the Puck editor instance.

Component Configuration:
  - Specifies properties and behaviors for individual components within Puck.
```

--------------------------------

TITLE: Get Permissions by Type
DESCRIPTION: Retrieves permissions for a given component type. Permissions are set using the `permissions` parameter in the component configuration.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: javascript
CODE:
```
getPermissions({ type: "HeadingBlock" });
// { delete: false }
```

--------------------------------

TITLE: Configure 'arrayFields' Parameter for Array Field
DESCRIPTION: Example showing how to define the structure of items within an array field using the 'arrayFields' parameter in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          }
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Extension - Plugin API
DESCRIPTION: Guide on using the 'Plugin API' for extending Puck Editor. This section details how to develop and integrate custom plugins to add new features.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Plugin API: https://puckeditor.com/docs/extending-puck/plugins
```

--------------------------------

TITLE: Puck Extension - UI Overrides
DESCRIPTION: Guide on overriding default UI elements in Puck. This allows for complete customization of the editor's interface.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Extending Puck - UI Overrides:
  This guide explains how to override default UI elements in the Puck editor.
  Customize specific parts of the editor's interface, such as the toolbar or sidebar.
  
  Overriding UI Elements:
    - Create custom React components for the elements you want to replace.
    - Use the `registerOverride` function or provide overrides during Puck initialization.
  
  Example:
    // Define a custom toolbar component
    const MyCustomToolbar = (props) => (
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        Custom Toolbar
        {/* Render default toolbar items or your own */}

```

--------------------------------

TITLE: Puck Editor Integration Guide
DESCRIPTION: This section covers integrating Puck into your project, including component configuration, root configuration, multi-column layouts, categories, dynamic props, dynamic fields, external data sources, React Server Components, data migration, viewports, and feature toggling.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/field-types

LANGUAGE: APIDOC
CODE:
```
Puck Editor Integration Guide:

Introduction:
  - Link: https://puckeditor.com/docs

Getting Started:
  - Link: https://puckeditor.com/docs/getting-started

Integrating Puck:
  - Component Configuration: https://puckeditor.com/docs/integrating-puck/component-configuration
  - Root Configuration: https://puckeditor.com/docs/integrating-puck/root-configuration
  - Multi-column Layouts: https://puckeditor.com/docs/integrating-puck/multi-column-layouts
  - Categories: https://puckeditor.com/docs/integrating-puck/categories
  - Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
  - Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
  - External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
  - React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
  - Data Migration: https://puckeditor.com/docs/integrating-puck/data-migration
  - Viewports: https://puckeditor.com/docs/integrating-puck/viewports
  - Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for configuring Puck, covering aspects like component settings, root configurations, and layout management.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  Details on how to configure individual components within Puck.

Root Configuration:
  Configuration for the root of the Puck editor instance.

Multi-column Layouts:
  Guidelines for creating multi-column layouts using Puck.

Categories:
  How to categorize components and fields in Puck.

Dynamic Props:
  Managing dynamic properties for components.

Dynamic Fields:
  Creating and using dynamic fields in Puck.

External Data Sources:
  Integrating external data sources with Puck.

React Server Components:
  Using Puck with React Server Components.

Data Migration:
  Strategies for migrating data within Puck.

Viewports:
  Configuring and managing viewports in Puck.

Feature Toggling:
  Implementing feature toggles within Puck.

Overlay Portals:
  Using overlay portals for UI elements.
```

--------------------------------

TITLE: API Reference for <AutoField> Component Props
DESCRIPTION: Details the properties (props) available for the <AutoField> component, including their types, status (required/optional), example values, and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/components/auto-field

LANGUAGE: APIDOC
CODE:
```
AutoField Props:
  field:
    Type: Field
    Status: Required
    Example: { type: "text" }
    Description: An object containing the user defined Field configuration.
  onChange:
    Type: Function
    Status: Required
    Example: onChange("Goodbye, world")
    Description: A callback that triggers when the value changes.
  value:
    Type: Any
    Status: Required
    Example: "Hello, world"
    Description: The current value for the field.
  id:
    Type: String
    Status: Optional
    Example: "my-input"
    Description: An optional ID for this field. Will be generated if not specified.
  readOnly:
    Type: Boolean
    Status: Optional
    Example: true
    Description: A boolean describing whether or not this field is `readOnly`.
```

--------------------------------

TITLE: Puck Editor Configuration API Overview
DESCRIPTION: Provides an overview of the main configuration objects in Puck Editor, including the global Config and individual ComponentConfig.

SOURCE: https://puckeditor.com/docs/api-reference/configuration

LANGUAGE: APIDOC
CODE:
```
Config:
  The main configuration object describing what Puck can render.
```

LANGUAGE: APIDOC
CODE:
```
ComponentConfig:
  The configuration of each component defined in the main config.
```

--------------------------------

TITLE: Puck Editor Integration: Dynamic Props
DESCRIPTION: Guide on using dynamic props to enable components to adapt their properties based on context or data within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Dynamic Props:

This guide explains how to use dynamic props to make components adaptable within Puck.
```

--------------------------------

TITLE: Puck Editor Integration - Dynamic Props
DESCRIPTION: Guide on utilizing 'Dynamic Props' when integrating Puck Editor. This section covers how to pass dynamic properties to components within Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Dynamic Props: https://puckeditor.com/docs/integrating-puck/dynamic-props
```

--------------------------------

TITLE: Implementing a Custom Puck Plugin with Overrides
DESCRIPTION: This JavaScript example demonstrates how to define a simple Puck plugin that utilizes the `overrides` API to customize the rendering of `componentItem` elements. The plugin is then integrated into the `Puck` editor component via its `plugins` prop.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";

const MyPlugin = {
  overrides: {
    componentItem: ({ name }) => (
      <div style={{ backgroundColor: "hotpink" }}>{name}</div>
    ),
  },
};

export function Editor() {
  return (
    <Puck
      // ...
      plugins={[MyPlugin]}
    />
  );
}
```

--------------------------------

TITLE: Puck Editor Extension Guide
DESCRIPTION: This section details extending Puck, covering composition, custom fields, field transforms, the internal Puck API, theming, the Plugin API, and UI overrides.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/field-types

LANGUAGE: APIDOC
CODE:
```
Puck Editor Extension Guide:

Extending Puck:
  - Composition: https://puckeditor.com/docs/extending-puck/composition
  - Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
  - Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
  - Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
  - Theming: https://puckeditor.com/docs/extending-puck/theming
  - Plugin API: https://puckeditor.com/docs/extending-puck/plugins
  - UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This section covers extending Puck's functionality, including creating custom fields, utilizing field transforms, and understanding the internal Puck API for deeper customization.

SOURCE: https://puckeditor.com/docs/api-reference/permissions

LANGUAGE: javascript
CODE:
```
// Extending Puck functionality
// Learn about composition, custom fields, and the plugin API:
// https://puckeditor.com/docs/extending-puck
```

--------------------------------

TITLE: Puck Extension - Custom Fields
DESCRIPTION: Guide on creating custom field types for Puck. This allows extending the editor's input capabilities.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Extending Puck - Custom Fields:
  This guide explains how to create custom field types for Puck.
  Custom fields allow you to integrate specialized input controls into the editor.
  
  Creating a Custom Field:
    1. Define the field configuration object, including `type`, `label`, and optionally `defaultValue`.
    2. Create a React component that will render the input control for your custom field.
    3. Register your custom field type using `registerFieldType`.
  
  Example:
    // 1. Define the field configuration
    const colorPickerField = {
      type: 'color',
      label: 'Background Color',
      defaultValue: '#ffffff',
      // You can also add a custom render component here if needed
      // Control: MyColorPickerComponent
    };

    // 2. (Optional) Create a custom render component
    // const MyColorPickerComponent = ({ name, value, onChange }) => (
    //   <input type="color" name={name} value={value} onChange={(e) => onChange(e.target.value)} />
    // );

    // 3. Register the custom field type
    // registerFieldType('color', colorPickerField);

    // In your component configuration:
    // fields: {
    //   backgroundColor: { type: 'color', label: 'Background Color' }
    // }
```

--------------------------------

TITLE: Puck Integration - React Server Components
DESCRIPTION: Guide on integrating Puck with React Server Components (RSC). This covers considerations for using RSC within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - React Server Components:
  This guide discusses the integration of Puck with React Server Components (RSC).
  Understand the implications and best practices for using RSC within Puck.
  
  Considerations:
    - RSCs cannot be directly rendered within the Puck editor canvas as they run on the server.
    - You can use RSCs as content that Puck manages, but the RSC itself won't be editable via Puck's UI.
    - Client components that wrap or interact with RSCs can be configured and managed by Puck.
  
  Example Structure:
    // Server Component (e.g., in app/page.tsx)
    async function ServerContent() {
      const data = await fetchData();
      return <PuckEditor config={puckConfig} data={data} />;
    }

    // Client Component managed by Puck
    const EditableServerWrapper = ({ serverData }) => {
      return (
        <div>
          <h1>Server Data:</h1>
          <pre>{JSON.stringify(serverData, null, 2)}</pre>
          {/* Other editable Puck components */}
        </div>
      );
    };

    // Puck Component Configuration
    const serverWrapperConfig = {
      name: 'ServerWrapper',
      fields: { /* ... */ },
      render: EditableServerWrapper
    };
```

--------------------------------

TITLE: Using the 'label' Prop with FieldLabel
DESCRIPTION: This example shows how to set the required `label` prop for the `FieldLabel` component, providing the text that will be displayed as the field's label.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";

const CustomField = () => (
  <FieldLabel label="Title">
    <input />
  </FieldLabel>
);

// ...
```

--------------------------------

TITLE: Example: Configuring Collision Axis with 'collisionAxis' Prop
DESCRIPTION: Explains how to configure the collision detection axis for the DropZone using the 'collisionAxis' prop, with options for '"x"', '"y"', or '"dynamic"'.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" collisionAxis="dynamic" />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Client Component Implementation
DESCRIPTION: Example of a React component ('HeadingBlock') marked with the "use client"; directive. This component utilizes client-side hooks like useState, ensuring it functions correctly in a client-side environment.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: tsx
CODE:
```
"use client";
import { useState } from "react";

export type HeadingBlockProps = {
  title: string;
};

export default ({ title }: { title: string }) => {
  useState(); // useState fails on the server
  return (
    <div style={{ padding: 64 }}>
      <h1>{title}</h1>
    </div>
  );
};
```

--------------------------------

TITLE: Configure 'min' Items for Array Field
DESCRIPTION: Example demonstrating how to set the minimum number of items required in an array field using the 'min' parameter in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          },
          min: 1
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Example data payload for PuckEditor HeadingBlock
DESCRIPTION: Demonstrates a minimal data payload containing a HeadingBlock component within the content array and root properties. This payload is used to render HTML nodes.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: JSON
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234"
      }
    }
  ],
  "root": {}
}

```

--------------------------------

TITLE: Puck Editor Integration - External Data Sources
DESCRIPTION: Guide on connecting 'External Data Sources' when integrating Puck Editor. This section details how to fetch and use data from external sources within Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  External Data Sources: https://puckeditor.com/docs/integrating-puck/external-data-sources
```

--------------------------------

TITLE: Puck Extension Guide
DESCRIPTION: This section covers extending Puck's functionality, including creating custom fields, utilizing field transforms, and understanding the internal Puck API for deeper customization.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
// Extending Puck functionality
// Learn about composition, custom fields, and the plugin API:
// https://puckeditor.com/docs/extending-puck
```

--------------------------------

TITLE: External Field Type API Parameters
DESCRIPTION: A comprehensive list of all parameters available for configuring the 'external' field type, including their types, status (required/optional), and example usage.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: APIDOC
CODE:
```
External Field Type Parameters:
  type: "external" (Required)
  fetchList(queryParams): Function (Required)
  filterFields: Object
  getItemSummary(item): Function
  initialFilters: Object
  initialQuery: String
  mapProp(item): Function
  mapRow(item): Function
  placeholder: String
  renderFooter(props): Function
  showSearch: Boolean
```

--------------------------------

TITLE: Restrict Components in Slot (Allow List)
DESCRIPTION: Shows how to use the `allow` parameter within a slot's configuration to restrict which components can be dropped into that slot. This example allows only 'Card' components.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    fields: {
      content: {
        type: "slot",
        allow: ["Card"],
      },
    },
    Example: {
      render: ({ content: Content }) => {
        return <Content />;
      },
    },
  },
};
```

--------------------------------

TITLE: Textarea Field Parameters Reference
DESCRIPTION: Reference for available parameters when configuring a textarea field, including their types, examples, and status (required/optional).

SOURCE: https://puckeditor.com/docs/api-reference/fields/textarea

LANGUAGE: APIDOC
CODE:
```
| Param | Example | Type | Status |\n| --- | --- | --- | --- |\n| [`type`](#type) | `type: \"textarea\"` | ”textarea” | Required |\n| [`placeholder`](#placeholder) | `placeholder: \"Lorem ipsum...\"` | String | - |
```

--------------------------------

TITLE: Configure Fixed Layouts with Puck Editor
DESCRIPTION: Demonstrates how to create fixed layouts by combining multiple DropZone components using a grid display. It defines a custom Example component with 'leftColumn' and 'rightColumn' slots, rendering them side-by-side using CSS Grid.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        leftColumn: {
          type: "slot",
        },
        rightColumn: {
          type: "slot",
        },
      },
      render: ({ leftColumn: LeftColumn, rightColumn: RightColumn }) => {
        return (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <LeftColumn />
            <RightColumn />
          </div>
        );
      },
    },
    Card: {
      render: ({ text }) => <div>{text}</div>,
    },
  },
};
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for the Puck API related to configuration. This includes details on root configuration and component-specific configurations.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Puck API - Configuration:
  This section covers the configuration aspects of Puck, including root and component-level settings.
  
  Config:
    - Represents the overall configuration for the Puck editor instance.
    - Properties:
      - root: RootConfiguration - Configuration for the root element.
      - components: Record<string, ComponentConfig> - Registered components.
      - fieldTypes: Record<string, FieldType> - Custom field types.
      - actions: Record<string, Action> - Available actions.
      - overrides: Record<string, Override> - UI overrides.
      - permissions: Permissions - Permissions configuration.
      - theming: ThemingConfig - Theming settings.
  
  ComponentConfig:
    - Defines the configuration for a specific component.
    - Properties:
      - name: string - The unique name of the component.
      - fields: Record<string, Field> - The fields for the component.
      - render: React.FC<any> - The React component to render.
      - category: string (optional) - The category the component belongs to.
      - icon: string (optional) - An icon for the component.
      - description: string (optional) - A description of the component.
```

--------------------------------

TITLE: Get ComponentData by selector
DESCRIPTION: Retrieve an item’s ComponentData by its selector, which specifies its position within the component tree, including index and zone.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getItemBySelector({
  index: 0,
  zone: "Flex-123:children",
});
// { type: "HeadingBlock", props: {} }
```

--------------------------------

TITLE: Extending Puck
DESCRIPTION: Guides on extending Puck's functionality through composition, custom fields, field transforms, internal APIs, theming, plugin APIs, and UI overrides.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/fonts

LANGUAGE: javascript
CODE:
```
// Example: Composition
// Learn how to compose components in Puck.

// Example: Custom Fields
// Create your own custom fields for Puck.

// Example: Field Transforms
// Apply transformations to field data.

// Example: Internal Puck API
// Interact with Puck's internal API.

// Example: Theming
// Customize the look and feel of Puck.
//  - Overview
//  - Fonts

// Example: Plugin API
// Develop plugins to extend Puck's capabilities.

// Example: UI Overrides
// Override default UI elements in Puck.
```

--------------------------------

TITLE: Puck Integration - Dynamic Fields
DESCRIPTION: Guide on creating dynamic fields in Puck. This allows fields to change their behavior or options based on other field values or context.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Dynamic Fields:
  This guide covers creating dynamic fields in Puck, where field behavior or options can change.
  This is useful for creating dependent dropdowns or conditional inputs.
  
  Implementing Dynamic Fields:
    - Use the `resolve` function within a field's configuration to dynamically determine its properties.
    - The `resolve` function can return an updated field configuration object.
  
  Example Field Configuration:
    {
      type: 'select',
      label: 'City',
      resolve: (context) => {
        const selectedCountry = context.data.country;
        if (selectedCountry === 'USA') {
          return { options: ['New York', 'Los Angeles', 'Chicago'] };
        } else if (selectedCountry === 'Canada') {
          return { options: ['Toronto', 'Vancouver', 'Montreal'] };
        }
        return { options: [] };
      }
    }
```

--------------------------------

TITLE: Puck Editor Plugin Example
DESCRIPTION: Demonstrates how to create and use a custom plugin in Puck Editor to override UI elements, such as the drawer item. This involves defining a plugin object with an `overrides` property and passing it to the Puck component.

SOURCE: https://puckeditor.com/docs/api-reference/plugins

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";

const MyPlugin = {
  overrides: {
    drawerItem: ({ name }) => (
      <div style={{ backgroundColor: "hotpink" }}>{name}</div>
    ),
  },
};

export function Editor() {
  return (
    <Puck
      // ... other props
      plugins={[MyPlugin]}
    />
  );
}
```

--------------------------------

TITLE: Puck Integration - Overlay Portals
DESCRIPTION: Guide on using overlay portals in Puck. This explains how to render UI elements outside the main editor canvas, like modals or tooltips.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Integrating Puck - Overlay Portals:
  This guide explains how to use overlay portals in Puck for rendering UI elements like modals or tooltips.
  Portals allow rendering children into a DOM node that exists outside the parent component's DOM hierarchy.
  
  Usage:
    - You can leverage React's `createPortal` API within your custom Puck components or overrides.
    - Define a target DOM element for your portal.
  
  Example within a Custom Component:
    import React, { useState } from 'react';
    import ReactDOM from 'react-dom';

    const MyModalComponent = ({ isOpen, onClose }) => {
      if (!isOpen) return null;

      return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>My Modal</h2>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.getElementById('portal-root') // Ensure this element exists in your HTML
      );
    };

    // In your Puck component configuration:
    // render: ({ title, showModal }) => (
    //   <div>
    //     <h1>{title}</h1>
    //     <button onClick={() => showModal(true)}>Show Modal</button>
    //     <MyModalComponent isOpen={modalState} onClose={() => showModal(false)} />
    //   </div>
    // )
  
```

--------------------------------

TITLE: Using Puck Children for Compositional Interfaces
DESCRIPTION: This example illustrates how to use the `children` prop of the Puck component to render custom nodes, such as `Puck.Preview`, enabling compositional interfaces within the editor and extending its rendering capabilities.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck /*...*/>
      <Puck.Preview />
    </Puck>
  );
}
```

--------------------------------

TITLE: Example usage of <AutoField> component in Puck
DESCRIPTION: Demonstrates how to import and use the Autofield component within a custom field definition in a Puck configuration. It shows how to pass field, onChange, and value props to render a text input.

SOURCE: https://puckeditor.com/docs/api-reference/components/auto-field

LANGUAGE: javascript
CODE:
```
import { Autofield } from "@measured/puck";

const CustomField = ({ onChange, value }) => (
  <AutoField field={{ type: "text" }} onChange={onChange} value={value} />
);

const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          render: MyCustomField,
        }
      }
    }
  }
};
```

--------------------------------

TITLE: Integrating Puck - Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Viewports:
  - Defining and switching between different screen sizes for previewing content.
  - Essential for responsive design validation.
```

--------------------------------

TITLE: Implement Drawer Item Override
DESCRIPTION: This example demonstrates how to override the default rendering of items in the component drawer. It replaces the default rendering with a custom div that has a hotpink background.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
export function Editor() {
  return (
    <Puck
      // ...
      overrides={{
        // Render a custom element for each item in the component list
        drawerItem: ({ name }) => (
          <div style={{ backgroundColor: "hotpink" }}>{name}</div>
        ),
      }}
    />
  );
}
```

--------------------------------

TITLE: Puck Editor Integration - React Server Components
DESCRIPTION: Guide on integrating Puck Editor with 'React Server Components'. This section covers the specific considerations and methods for using RSCs with Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  React Server Components: https://puckeditor.com/docs/integrating-puck/server-components
```

--------------------------------

TITLE: Configure 'max' Items for Array Field
DESCRIPTION: Example demonstrating how to set the maximum number of items allowed in an array field using the 'max' parameter in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" }
          },
          max: 3
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Introduce New Field Type
DESCRIPTION: This example illustrates how to introduce a new custom field type named 'myField'. This allows you to expose new field functionalities to your components.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
export function Editor() {
  return (
    <Puck
      // ...
      overrides={{
        fieldTypes: {
          myField: ({ name, onChange, value }) => <div />,
        },
      }}
    />
  );
}
```

--------------------------------

TITLE: Get global, component, or resolved dynamic permissions
DESCRIPTION: Retrieve permissions for the entire application, a specific component type, or a particular component instance, resolving any dynamic permissions.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: JavaScript
CODE:
```
getPermissions();
// { delete: true, edit: true }
```

--------------------------------

TITLE: Rendering Puck Config in Next.js App Router
DESCRIPTION: Example of a Next.js page component that renders Puck configuration. It shows how to fetch data, optionally resolve it server-side using Puck's utilities, and then render the page with the provided data and configuration.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: tsx
CODE:
```
import { config } from "../puck.config.tsx";

export default async function Page() {
  const data = await getData(); // Some server function
  const resolvedData = await resolveAllData(data, config); // Optional call to resolveAllData, if this needs to run server-side
  
  return <Render data={resolvedData} config={config} />;
}
```

--------------------------------

TITLE: Puck Component Props Reference
DESCRIPTION: Detailed reference for all properties accepted by the Puck component, including their types, examples, and status (required/optional). This outlines the main configuration points for the editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: APIDOC
CODE:
```
Puck Component Props:
- config: Config (Required) - An object describing available components, fields.
- data: Data (Required) - The initial data to render.
- dnd: DndConfig (Optional) - Configure drag-and-drop behavior.
- children: ReactNode (Optional) - Render custom nodes for compositional interfaces.
- headerPath: String (Optional) - Set a path to show after the header title.
- headerTitle: String (Optional) - Set the title shown in the header.
- iframe: IframeConfig (Optional) - Configure the iframe behaviour.
- initialHistory: InitialHistory (Optional) - Initial history state.
- metadata: Object (Optional) - Arbitrary metadata.
- onAction(): Function (Optional) - Callback for actions.
- onChange(): Function (Optional) - Callback when data changes.
- onPublish(): Function (Optional) - Callback for publishing data.
- overrides: Overrides (Experimental) - Custom overrides for UI elements.
- permissions: Plugin[] (Experimental) - Permissions configuration.
- plugins: Plugin[] (Experimental) - Array of plugins to extend functionality.
- ui: AppState.ui (Optional) - UI state configuration.
- viewports: Viewport[] (Optional) - Configure editor viewports.
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: This section covers the configuration options available for the Puck editor. It details how to set up root configurations, component configurations, and other settings that control the behavior and appearance of the editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: APIDOC
CODE:
```
Configuration:
  - Root Configuration: Defines the overall structure and settings for the Puck editor instance.
  - Component Configuration: Specifies how individual components are configured, including their properties and behavior.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: Provides an overview of the Puck API and its accessibility. It mentions key hooks like `usePuck` and `useGetPuck` for interacting with the API and lists related documentation links for specific API areas.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: APIDOC
CODE:
```
PuckApi:
  Description: Puck exposes its internal API for extending Puck with custom functionality.
  Access:
    - usePuck: Accesses PuckApi within the component render lifecycle. Allows using selectors to limit re-renders.
    - useGetPuck: Accesses the latest PuckApi at call time, outside the render lifecycle.
  Limitations:
    - PuckApi cannot currently be accessed outside of composition, UI overrides, or custom fields contexts.
  Related Documentation:
    - Overrides: https://puckeditor.com/docs/api-reference/overrides
    - Actions: https://puckeditor.com/docs/api-reference/actions
    - FieldTransforms: https://puckeditor.com/docs/api-reference/field-transforms
    - Permissions: https://puckeditor.com/docs/api-reference/permissions
    - Plugin: https://puckeditor.com/docs/api-reference/plugin
    - PuckApi: https://puckeditor.com/docs/api-reference/puck-api
    - Theming: https://puckeditor.com/docs/api-reference/theming
    - usePuck function: https://puckeditor.com/docs/api-reference/functions/use-puck
    - useGetPuck function: https://puckeditor.com/docs/api-reference/functions/use-get-puck
```

--------------------------------

TITLE: Configure Component with Default Props for Slot Content
DESCRIPTION: This configuration defines an 'Example' component that utilizes a 'slot' field. It demonstrates how to use 'defaultProps' to pre-populate the slot with an array of 'ComponentData', specifically a 'Card' component with initial text. It also includes the definition for the 'Card' component.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        content: {
          type: "slot"
        }
      },
      defaultProps: {
        content: [
          {
            type: "Card",
            props: {
              text: "Pre-populated"
            }
          }
        ]
      },
      render: ({ content: Content }) => <Content />
    },
    Card: {
      render: ({ text }) => <div>{text}</div>
    }
  }
};
```

--------------------------------

TITLE: Use Get Puck Hook
DESCRIPTION: The `useGetPuck` hook is similar to `usePuck` but is designed for use outside the React render lifecycle, such as in utility functions or event handlers.

SOURCE: https://puckeditor.com/docs/api-reference/functions

LANGUAGE: javascript
CODE:
```
import { useGetPuck } from '@puckeditor/react';

function someUtilityFunction() {
  const puck = useGetPuck();

  // Use the puck API here
  // puck.save();
}
```

--------------------------------

TITLE: Migrate Legacy Data with migrate() Helper
DESCRIPTION: Shows how to use the `migrate()` helper function from `@measured/puck` to migrate existing DropZone data to the new slot data model.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: javascript
CODE:
```
import { migrate } from "@measured/puck";
import config from "puck.config.tsx";
const newData = migrate(legacyData, config);
```

--------------------------------

TITLE: setDeep API Documentation
DESCRIPTION: Detailed documentation for the setDeep function, including its parameters, their types, and usage examples. The 'path' parameter supports dot notation for object properties and bracket notation for array indices.

SOURCE: https://puckeditor.com/docs/api-reference/functions/set-deep

LANGUAGE: APIDOC
CODE:
```
setDeep(input: Object | Array, path: String, value: Any): Object | Array

Description:
A convenience utility for setting the value of a key deep within an object.
Useful when implementing [field transforms](https://puckeditor.com/docs/api-reference/field-transforms).

Parameters:
- input: The input object or array that contains the key to be updated.
- path: A dot-notated path that describes a key deep within an object or array.
  Uses dot-notation and square brackets:
    * '.' deliminates sub-props in an [object field](https://puckeditor.com/docs/api-reference/fields/object) (i.e. `a.b` represents `b` where `a` is `{b: "Value"}`)
    * '[*]' which donate an index in an [array field](https://puckeditor.com/docs/api-reference/fields/array) where '*' is an integer (i.e. `a[0].b` represents `b` in the first item in array `a` with the value `[{b: "Value"}]`)
  Commonly provided by the [propPath parameter](https://puckeditor.com/docs/api-reference/field-transforms#proppath) for field transforms.
- value: The new value to set at the specified path.

Example:
```javascript
import { setDeep } from "@measured/puck";
const newData = setDeep(
  {
    object: {
      array: [{ key: "Hello, world" }],
    },
  },
  "object.array[0].key",
  "Goodbye, world"
);
console.log(newData);
// {
//   object: {
//     array: [{ key: "Goodbye, world" }],
//   },
// }
```
```

--------------------------------

TITLE: Using the 'children' Prop with FieldLabel
DESCRIPTION: This example illustrates how to pass a React node, such as an input element, as `children` to the `FieldLabel` component. The children will be rendered inside or as a sibling to the label.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";

const CustomField = () => (
  <FieldLabel label="Title">
    <input />
  </FieldLabel>
);

// ...
```

--------------------------------

TITLE: Example Usage of useGetPuck Hook
DESCRIPTION: This code snippet illustrates how to import and utilize the `useGetPuck` hook from `@measured/puck`. It demonstrates how to obtain a `getPuck` function, which, when called, returns the current `PuckApi` instance. This pattern is essential for accessing up-to-date application state within event handlers or `useCallback` functions, ensuring that the `appState` is always current.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-get-puck

LANGUAGE: JavaScript
CODE:
```
import { useGetPuck } from "@measured/puck";

const Example = () => {
  const getPuck = useGetPuck();

  const handleClick = useCallback(() => {
    // Current PuckApi is always provided
    const { appState } = getPuck();
  }, [getPuck]);

  return <button onClick={handleClick}>Click me</button>;
};
```

--------------------------------

TITLE: Puck Editor Integration - Dynamic Fields
DESCRIPTION: Guide on implementing 'Dynamic Fields' when integrating Puck Editor. This section explains how to create fields whose behavior or options change dynamically.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Dynamic Fields: https://puckeditor.com/docs/integrating-puck/dynamic-fields
```

--------------------------------

TITLE: Puck ComponentData API Reference
DESCRIPTION: Detailed API reference for the `ComponentData` object, which represents an instance of a component within the Puck editor. It outlines the required and optional parameters, their types, examples, and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
ComponentData:
  Description: An object representing an instance of a component.
  Parameters:
    type:
      Type: String
      Status: Required
      Example: type: "HeadingBlock"
      Description: The type of the component, which tells Puck to run the render() method for the component of the same key.
    props:
      Type: Object
      Status: Required
      Example: props: { id: "12345", title: "Hello, world" }
    readOnly:
      Type: Object
      Status: Optional
      Example: readOnly: { title: true }
```

--------------------------------

TITLE: Integrating Puck - Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Viewports:
  - Defining and switching between different screen sizes for previewing content.
  - Essential for responsive design validation.
```

--------------------------------

TITLE: Example Data Payload for a Puck Component
DESCRIPTION: Illustrates the JSON data structure generated by Puck when a component is published or saved. It shows how the component's type and basic properties are stored in the content array.

SOURCE: https://puckeditor.com/docs/integrating-puck/component-configuration

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234"
      }
    }
  ],
  "root": {}
}
```

--------------------------------

TITLE: RootData Object API Definition
DESCRIPTION: Defines the RootData object's properties and their characteristics, including examples, types, status, and descriptions for 'props', 'readOnly', and the required 'type' parameter.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
RootData:
  description: An object representing the root data. Similar to ComponentData.
  properties:
    props:
      example: "props: { title: \"Hello, world\"}"
      type: "Object"
      status: "Required"
    readOnly:
      example: "readOnly: { title: true }"
      type: "Object"
      status: "Optional"
  required_params:
    type:
      description: "The type of the component, which tells Puck to run the render() method for the component of the same key."
```

--------------------------------

TITLE: Restrict Components in Puck Editor Slots using 'allow'
DESCRIPTION: Illustrates how to control which components can be dragged into a slot using the 'allow' parameter. This example restricts the 'content' slot to only accept 'Card' components.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    fields: {
      content: {
        type: "slot",
        allow: ["Card"],
      },
    },
    Example: {
      render: ({ content: Content }) => {
        return <Content />;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck `Data` Object API Parameter Reference
DESCRIPTION: Detailed documentation for the parameters of the `Data` object, including their types, examples, and whether they are required for proper content representation in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
Data Object Parameters:
- content:
    Description: Array of component data.
    Type: ComponentData[]
    Required: Yes
    Example: content: []
- root:
    Description: Root data for the page.
    Type: RootData
    Required: Yes
    Example: root: { props: { title: "My page" } }
- zones:
    Description: Object mapping zone IDs to arrays of component data.
    Type: Object
    Required: No
    Example: zones: { "HeadingBlock-123:zone": [] }
```

--------------------------------

TITLE: Assign Components to Multiple Categories
DESCRIPTION: This example shows how a single component, 'HeadingBlock', can be assigned to multiple categories ('typography' and 'foundational') simultaneously within the Puck configuration.

SOURCE: https://puckeditor.com/docs/integrating-puck/categories

LANGUAGE: javascript
CODE:
```
const config = {
  categories: {
    typography: {
      components: ["HeadingBlock", "ParagraphBlock"]
    },
    foundational: {
      components: ["HeadingBlock"]
    }
  },
  // ...
};
```

--------------------------------

TITLE: Base Field Parameters API Reference
DESCRIPTION: Defines the common parameters available for all field types in Puck's API, providing their types and example usage.

SOURCE: https://puckeditor.com/docs/api-reference/fields/base

LANGUAGE: APIDOC
CODE:
```
Base Field:
  Params:
    label:
      Type: String
      Example: label: "Title"
    labelIcon:
      Type: ReactNode
      Example: labelIcon: <Icon />
    metadata:
      Type: Object
      Example: metadata: {}
    visible:
      Type: Boolean
      Example: visible: false
```

--------------------------------

TITLE: Example: Applying Custom Class with 'className' Prop
DESCRIPTION: Demonstrates applying a custom CSS class to the DropZone component using the 'className' prop, such as '"MyComponent"', while retaining default DropZone styles.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" className="MyComponent" />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Integrate Puck Drawer Component in React Editor
DESCRIPTION: This example demonstrates how to set up a basic Puck editor with the Drawer component. It shows how to import Puck and Drawer and include Drawer.Item elements within the drawer for a custom UI.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: javascript
CODE:
```
import { Puck, Drawer } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Drawer>
        <Drawer.Item name="Orange" />
      </Drawer>
    </Puck>
  );
}
```

--------------------------------

TITLE: Controlling Element Type with 'el' Prop
DESCRIPTION: This example shows how to use the `el` prop to specify whether the `FieldLabel` component should render as a `<label>` or a `<div>` element, defaulting to `<label>`.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";

const CustomField = () => (
  <FieldLabel el="div" label="Title">
    <input />
  </FieldLabel>
);

// ...
```

--------------------------------

TITLE: Define a basic overrides object in JavaScript
DESCRIPTION: This snippet demonstrates how to define a simple `overrides` object in JavaScript, showing an example of overriding the default `header` component with custom JSX content.

SOURCE: https://puckeditor.com/docs/api-reference/overrides

LANGUAGE: javascript
CODE:
```
const overrides = {
  header: () => <header>My header</header>,
};
```

--------------------------------

TITLE: Example: Assigning React Ref with 'ref' Prop
DESCRIPTION: Demonstrates how to assign a React ref to the root node of the DropZone component for direct DOM manipulation or access, using 'useRef'.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        const ref = useRef();

        return (
          <div>
            <DropZone zone="my-content" ref={ref} />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: PuckEditor Component Props Reference
DESCRIPTION: Detailed API documentation for the `actions` and `children` properties of the PuckEditor component, outlining their types, example usage, and purpose.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header

LANGUAGE: APIDOC
CODE:
```
PuckEditor Component Props:

Prop: actions
  Type: ReactNode
  Example: <div />
  Description: A node containing the headerActions.

Prop: children
  Type: ReactNode
  Example: <div />
  Description: The default node for the header.
```

--------------------------------

TITLE: Puck Editor Integration: Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Viewports:

This guide explains how to configure and manage viewports for responsive design in Puck.
```

--------------------------------

TITLE: JavaScript Example: Puck Editor Select Field 'options' Configuration
DESCRIPTION: Illustrative JavaScript code snippet demonstrating how to define the 'options' array for a select field, including label and value pairs, within a component's configuration in Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        textAlign: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" }
          ]
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/component-configuration

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Render server-side Puck configuration in Next.js
DESCRIPTION: This Next.js app router example demonstrates how to render the server-side Puck configuration. It imports the server config and uses it with the `<Render>` component, typically after fetching data on the server.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: typescript
CODE:
```
import { config } from "../puck.config.server.tsx";

export default async function Page() {
  const data = await getData(); // Some server function

  return <Render data={data} config={config} />;
}
```

--------------------------------

TITLE: Example: Disallowing Components with 'disallow' Prop
DESCRIPTION: Illustrates using the 'disallow' prop to prevent specific components from being dragged into the DropZone, such as '["HeadingBlock"]', noting that 'allow' overrides 'disallow'.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return (
          <div>
            <DropZone zone="my-content" disallow={["HeadingBlock"]} />
          </div>
        );
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Extension - Internal Puck API
DESCRIPTION: Guide on using the 'Internal Puck API' for extending Puck Editor. This section details the internal APIs available for advanced customization and extension.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
```

--------------------------------

TITLE: Puck Fields Base API Documentation
DESCRIPTION: Documentation for the base properties of Puck fields, including label, labelIcon, metadata, and visibility. It details how to configure these properties and provides examples for their usage within Puck components.

SOURCE: https://puckeditor.com/docs/api-reference/fields/base

LANGUAGE: APIDOC
CODE:
```
Base Field Properties:

Description: The base type shared by all fields in Puck.

Parameters:
- label (String): Sets the label for the input. Puck uses the key if not provided. Example: `label: "Title"`
- labelIcon (ReactNode): Sets an icon to display next to the label. Example: `labelIcon: <Icon />`
- metadata (Object): An object containing additional information for the field. Example: `metadata: {}`
- visible (Boolean): Controls the visibility of the field. Example: `visible: false`

Usage Examples:
```javascript
const config = {
  components: {
    Example: {
      fields: {
        items: {
          label: "My Field",
          labelIcon: <Icon />,
          metadata: {
            title: "Hello, world",
          },
          visible: false,
          // ... other field configurations
        },
      },
      // ... other component configurations
    },
  },
};
```
```

--------------------------------

TITLE: Indicating Read-Only State with 'readOnly' Prop
DESCRIPTION: This example illustrates how to use the `readOnly` boolean prop to visually indicate that a field is in a read-only state, typically by showing a padlock icon.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";

const CustomField = () => (
  <FieldLabel label="Title" readOnly>
    <input readOnly />
  </FieldLabel>
);

// ...
```

--------------------------------

TITLE: Integrate Puck.Outline Component in React
DESCRIPTION: This example shows how to embed the `Puck.Outline` component within a React application using the `@measured/puck` library to display an interactive outline of the current data payload.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Puck.Outline />
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck API Reference - usePuck
DESCRIPTION: Provides the API documentation for the `usePuck` hook, detailing its arguments, the `selector` function's purpose and usage, and what it returns.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-puck

LANGUAGE: APIDOC
CODE:
```
usePuck
  A hook for accessing the [`PuckApi`](https://puckeditor.com/docs/api-reference/puck-api) as part of your React render lifecycle.

  Args:
    selector(data): Function - A selector function that describes what `usePuck` returns. Receives [`PuckApi`](https://puckeditor.com/docs/api-reference/puck-api) and returns anything. Be as granular as possible to minimize re-renders.

  Returns:
    Whatever is returned by the `selector`.
```

--------------------------------

TITLE: Puck Editor Extension - UI Overrides
DESCRIPTION: Guide on 'UI Overrides' for extending Puck Editor. This section explains how to modify or replace parts of the Puck editor's user interface.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  UI overrides: https://puckeditor.com/docs/extending-puck/ui-overrides
```

--------------------------------

TITLE: Puck Editor Integration - Feature Toggling
DESCRIPTION: Guide on 'Feature Toggling' when integrating Puck Editor. This section covers how to enable or disable specific features within Puck's integration.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Integrating Puck:
  Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
```

--------------------------------

TITLE: Puck Editor Extension - Field Transforms
DESCRIPTION: Guide on implementing 'Field Transforms' for extending Puck Editor. This section covers how to modify or transform field values during editing or rendering.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Field Transforms: https://puckeditor.com/docs/extending-puck/field-transforms
```

--------------------------------

TITLE: Puck Editor Extension - Custom Fields
DESCRIPTION: Guide on creating 'Custom Fields' for extending Puck Editor. This section explains how to define new field types to enhance component editing.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
Extending Puck:
  Custom Fields: https://puckeditor.com/docs/extending-puck/custom-fields
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: Provides an overview of the Puck API, including links to various sections such as Configuration, Fields, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. This serves as a central reference for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/overlay-portals

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:
  - Configuration: https://puckeditor.com/docs/api-reference/configuration
  - Data Model
  - Fields: https://puckeditor.com/docs/api-reference/fields
  - Functions
  - Overrides: https://puckeditor.com/docs/api-reference/overrides
  - Actions: https://puckeditor.com/docs/api-reference/actions
  - FieldTransforms: https://puckeditor.com/docs/api-reference/field-transforms
  - Permissions: https://puckeditor.com/docs/api-reference/permissions
  - Plugin: https://puckeditor.com/docs/api-reference/plugin
  - PuckApi: https://puckeditor.com/docs/api-reference/puck-api
  - Theming: https://puckeditor.com/docs/api-reference/theming

Guides:
  - Migrations

Integrating PuckOverlay Portals:
  - Overlay Portals: https://puckeditor.com/docs/integrating-puck/overlay-portals
  - Example: Tabs: https://puckeditor.com/docs/integrating-puck/overlay-portals#example-tabs

Internal Puck API:
  - usePuck(): https://puckeditor.com/docs/extending-puck/internal-puck-api

Navigation:
  - Previous Feature Toggling: https://puckeditor.com/docs/integrating-puck/feature-toggling
  - Next Composition: https://puckeditor.com/docs/extending-puck/composition

Resources:
  - Docs: https://puckeditor.com/docs
  - Live Demo: https://demo.puckeditor.com/edit
  - Blog: https://puckeditor.com/blog
  - Releases: https://github.com/puckeditor/puck/releases

Social:
  - GitHub: https://github.com/puckeditor/puck
  - Discord: https://discord.gg/D9e4E3MQVZ
  - X: https://x.com/puckeditor
  - Bluesky: https://bsky.app/profile/puckeditor.com

```

--------------------------------

TITLE: Render Basic Puck.Preview Component
DESCRIPTION: Demonstrates the fundamental integration of the <Puck.Preview> component within a React application using the Puck editor. This component provides a live drag-and-drop preview of the current data without any custom configuration.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Puck.Preview />
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck Editor Select Field Parameters Overview Table
DESCRIPTION: A summary table detailing the 'type' and 'options' parameters for configuring 'select' fields in Puck Editor, including their example usage, data types, and status (required).

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: APIDOC
CODE:
```
Param | Example | Type | Status
--- | --- | --- | ---
`type` | `type: "select"` | ”select” | Required
`options` | `options: [{ label: "Option 1", value: "option-1" }]` | Object[] | Required
```

--------------------------------

TITLE: Using the createUsePuck factory for optimized usePuck hook access
DESCRIPTION: Demonstrates how to use the `createUsePuck` factory to create a `usePuck` hook instance, which allows for efficient access to the Puck API with selectors, preventing unnecessary re-renders. The example shows how to retrieve the type of the currently selected item.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-puck

LANGUAGE: TypeScript
CODE:
```
import { createUsePuck } from "@measured/puck";

const usePuck = createUsePuck();

const Example = () => {
  const type = usePuck((s) => s.selectedItem?.type || "Nothing");

  return <h2>{type} selected</h2>;
};
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API related to 'Theming'. This section explains how to customize the visual appearance and theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Theming: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: PuckEditor Component Props API Reference
DESCRIPTION: API documentation for the `children` prop of the PuckEditor component, detailing its type, example usage, and purpose as the default node for the preview.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/preview

LANGUAGE: APIDOC
CODE:
```
PuckEditor Component Props:

Prop: children
  Type: ReactNode
  Example: <div />
  Description: The default node for the preview.
```

--------------------------------

TITLE: Integrating Puck - Multi-column Layouts
DESCRIPTION: Instructions on creating multi-column layouts for content within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Multi-column Layouts:
  - Techniques for arranging content in multiple columns using Puck.
  - Enables flexible content structuring and design.
```

--------------------------------

TITLE: Puck Plugin UI Overrides
DESCRIPTION: Illustrates how to use `overrides` in a Puck plugin to customize the editor's user interface. This example targets `drawerItem` to change the color of all drawer items to pink.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
const plugin = {
  overrides: {
    // Make all drawer items pink
    drawerItem: ({ name }) => <div style={{ color: "hotpink" }}>{name}</div>,
  },
};
```

--------------------------------

TITLE: Puck Editor Theming API Reference
DESCRIPTION: This section details the CSS custom properties available for theming the Puck Editor user interface. It includes properties for font families and provides examples of how to apply them.

SOURCE: https://puckeditor.com/docs/api-reference/theming

LANGUAGE: APIDOC
CODE:
```
Theming:
  Description: Theming in Puck is currently limited in functionality, and being explored via [#139 on GitHub](https://github.com/measuredco/puck/issues/139).
  CSS Properties for theming the default Puck user interface.

  Properties:
    --puck-font-family: The font family used for the Puck interface. Must be used with the `no-external` bundle that stops Puck from loading the default font.
      Example: Arial
      Usage:
        /* Load bundle without existing font */
        @import "@measured/puck/no-external.css";
        :root {
          --puck-font-family: Arial;
        }

    --puck-font-family-monospaced: The font family used for monospaced elements of the Puck interface.
      Example: Menlo
      Usage:
        /* Monospaced fonts don't use external files, so the default bundle is safe */
        @import "@measured/puck/puck.css";
        :root {
          --puck-font-family-monospaced: Menlo;
        }
```

--------------------------------

TITLE: Puck Editor Object Field Parameters Overview
DESCRIPTION: A table outlining the key parameters for configuring object fields in Puck Editor, including their type, example usage, and status (e.g., Required).

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: APIDOC
CODE:
```
Param: type
  Example: "type: \"array\""
  Type: "array"
  Status: Required
Param: objectFields
  Example: "objectFields: { title: { type: \"text\" } }"
  Type: Object
  Status: Required
```

--------------------------------

TITLE: Component readOnly Property Example
DESCRIPTION: Demonstrates the usage of the 'readOnly' property within a component's configuration. This property specifies which fields are set to read-only mode, preventing user modifications.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: json
CODE:
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234",
    "title": "Hello, world"
  },
  "readOnly": {
    "title": true
  }
}
```

--------------------------------

TITLE: Dynamically Changing Component Fields with resolveFields
DESCRIPTION: Shows how to use `resolveFields` to conditionally define or modify component fields based on the current `props`. In this example, a `waterType` field is added only if the `drink` prop is 'water'.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    MyComponent: {
      resolveFields: (data) => {
        const fields = {
          drink: {
            type: "radio",
            options: [
              { label: "Water", value: "water" },
              { label: "Orange juice", value: "orange-juice" },
            ],
          },
        };

        if (data.props.drink === "water") {
          return {
            ...fields,
            waterType: {
              // ... Define field
            },
          };
        }

        return fields;
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: JSON example for DropZone to slot data migration
DESCRIPTION: Illustrates the data structure before and after migrating DropZone data from a 'zones' object to an inline 'slots' array within the 'props' of a component. This migration requires the slot field name to match the DropZone's 'zone' property.

SOURCE: https://puckeditor.com/docs/api-reference/functions/migrate

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "Grid",
      "props": {
        "id": "Grid-12345"
      }
    }
  ],
  "zones": {
    "Grid-12345:items": [
      {
        "type": "HeadingBlock",
        "props": {
          "id": "Heading-12345",
          "title": "Hello, world"
        }
      }
    ]
  }
}
```

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "Grid",
      "props": {
        "id": "Grid-12345",
        "items": [
          {
            "type": "HeadingBlock",
            "props": {
              "id": "Heading-12345",
              "title": "Hello, world"
            }
          }
        ]
      }
    }
  ]
}
```

--------------------------------

TITLE: Puck Editor: Migrate Legacy Slot Data (TypeScript)
DESCRIPTION: Example demonstrating how to use the `migrate()` helper function from the `@measured/puck` library to convert existing legacy data, which uses the 'zones' object, to the new inline slot data model. This function requires the old data and the Puck configuration.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: TypeScript
CODE:
```
import { migrate } from "@measured/puck";
import config from "puck.config.tsx";

const newData = migrate(legacyData, config);
```

--------------------------------

TITLE: Puck Editor Integration: Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Viewports:

This guide explains how to configure and manage viewports for responsive design in Puck.
```

--------------------------------

TITLE: Puck Editor API Reference Links
DESCRIPTION: Provides links to key API documentation sections for extending Puck Editor, including the overrides API, composition, and internal APIs.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: APIDOC
CODE:
```
overrides API reference: https://puckeditor.com/docs/api-reference/overrides
Composition: https://puckeditor.com/docs/extending-puck/composition
Internal Puck API: https://puckeditor.com/docs/extending-puck/internal-puck-api
```

--------------------------------

TITLE: Implement Fluid Layouts with CSS Grid in Puck Editor
DESCRIPTION: Shows how to apply CSS display properties directly to a slot to achieve fluid layouts. The Example component's 'content' slot is configured with CSS Grid, allowing components within it to arrange dynamically.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        content: {
          type: "slot",
        },
      },
      render: ({ content: Content }) => (
        <Content
          style={{
            // Use CSS grid in this slot
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 16,
          }}
        />
      ),
    },
    Card: {
      render: ({ text }) => <div>{text}</div>,
    },
  },
};
```

--------------------------------

TITLE: Integrating a Custom Puck Plugin
DESCRIPTION: This example demonstrates how to define a custom plugin object and integrate it into the Puck editor. The plugin overrides the `componentItem` render function to customize the appearance of components within the editor UI.

SOURCE: https://puckeditor.com/docs/api-reference/plugin

LANGUAGE: TypeScript
CODE:
```
import { Puck } from "@measured/puck";

const MyPlugin = {
  overrides: {
    componentItem: ({ name }) => (
      <div style={{ backgroundColor: "hotpink" }}>{name}</div>
    ),
  },
};

export function Editor() {
  return (
    <Puck
      // ...
      plugins={[MyPlugin]}
    />
  );
}
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Implement Interactive Field Transform with Overlay Portals
DESCRIPTION: Shows how to make field transforms interactive by combining them with Overlay Portals. This example allows for inline text editing by making a paragraph element editable.

SOURCE: https://puckeditor.com/docs/extending-puck/field-transforms

LANGUAGE: javascript
CODE:
```
import { registerOverlayPortal } from "@measured/puck";

const EditableText = ({ value }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      registerOverlayPortal(ref.current);
    }
  }, [ref.current]);
  return (
    <p ref={ref} contentEditable>
      {value}
    </p>
  );
};

const fieldTransforms = {
  text: EditableText,
};

const Example = () => <Puck fieldTransforms={fieldTransforms} />;
```

--------------------------------

TITLE: Example: Renaming Props with transformProps
DESCRIPTION: Demonstrates how to use `transformProps` from `@measured/puck` to rename a property (e.g., 'title' to 'heading') within a 'HeadingBlock' component's data payload, showing the input and output data structures.

SOURCE: https://puckeditor.com/docs/api-reference/functions/transform-props

LANGUAGE: JavaScript
CODE:
```
import { transformProps } from "@measured/puck";

const data = {
  content: [{ type: "HeadingBlock", props: { title: "Hello, world" } }],
};

const updatedData = transformProps(data, {
  // Rename `title` to `heading`
  HeadingBlock: ({ title, ...props }) => ({ heading: title, ...props }),
});

console.log(updatedData);
// { content: [{ type: "HeadingBlock", props: { heading: "Hello, world" } }] };
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Puck.Preview Component Usage
DESCRIPTION: Demonstrates how to use the Puck.Preview component within a Puck editor setup to render a drag-and-drop preview of the current data. This component is essential for visualizing changes in a custom Puck UI.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
export function Editor() {
  return (
    <Puck>
      <Puck.Preview />
    </Puck>
  );
}
```

--------------------------------

TITLE: Number Field Configuration Parameters Reference
DESCRIPTION: Reference table detailing the available parameters for configuring number fields, including their types, example values, and status (required/optional), along with their descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/fields/number

LANGUAGE: APIDOC
CODE:
```
Number Field Parameters:
  - Param: "type"
    Example: "type: \"number\""
    Type: "number"
    Status: "Required"
    Description: "The type of the field. Must be \"number\" for Number fields."
  - Param: "max"
    Example: "max: 10"
    Type: "number"
    Status: "Optional"
    Description: "The maximum numeric value allowed."
  - Param: "min"
    Example: "min: 0"
    Type: "number"
    Status: "Optional"
    Description: "The minimum numeric value allowed."
  - Param: "placeholder"
    Example: "placeholder: \"Lorem ipsum...\""
    Type: "String"
    Status: "Optional"
    Description: "The placeholder text to display when the field is empty."
  - Param: "step"
    Example: "step: 0.1"
    Type: "number"
    Status: "Optional"
    Description: "The stepping interval when interacting with the field."
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Provides an overview of Puck Editor's configuration API, detailing how to define component structures, fields, and dynamic resolution logic.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-fields

LANGUAGE: APIDOC
CODE:
```
PuckEditorConfiguration:
  components: object
    - Defines the components available in the editor.
    - Each component can have properties like `render`, `resolveFields`, etc.

ComponentConfig:
  render: function
    - The React component to render for this component.
  resolveFields: function (data, context)
    - Function to dynamically resolve field configurations.
    - `data`: Contains component props and other relevant data.
    - `context`: Includes `changed` fields and `lastFields` for optimization.
    - Returns an object with field configurations.

FieldConfig:
  type: string
    - The type of the field (e.g., 'text', 'radio', 'select').
  options: array (optional)
    - Options for fields like 'radio' or 'select'.
    - Each option should have `label` and `value`.

Example Usage:
  components.MyComponent.resolveFields = (data) => {
    // ... logic to return field configurations ...
  };
```

--------------------------------

TITLE: Dynamic Fields with Synchronous Updates
DESCRIPTION: Demonstrates how to dynamically resolve field configurations based on component props using the `resolveFields` function. This example shows how to conditionally define fields based on the 'drink' prop.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-fields

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    MyComponent: {
      resolveFields: (data) => {
        const fields = {
          drink: {
            type: "radio",
            options: [
              { label: "Water", value: "water" },
              { label: "Orange juice", value: "orange-juice" },
            ],
          },
        };
        if (data.props.drink === "water") {
          return {
            ...fields,
            waterType: {
              // ... Define field
            },
          };
        }
        return fields;
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Custom Publish Button in Header
DESCRIPTION: This example shows how to override the header actions to include a custom 'Save' button. It utilizes the internal Puck API to access the application state and save data.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: javascript
CODE:
```
import { Puck, createUsePuck } from "@measured/puck";
const usePuck = createUsePuck();
const save = () => {};
export function Editor() {
  return (
    <Puck
      // ...
      overrides={{
        headerActions: ({ children }) => {
          const appState = usePuck((s) => s.appState);
          return (
            <>
              <button
                onClick={() => {
                  save(appState.data);
                }}
              >
                Save
              </button>
              {/* Render default header actions, such as the default Button *//*}
              {/*{children}*/}
            </>
          );
        },
      }}
    />
  );
}
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Puck Editor Component Props Data Model Example (JSON)
DESCRIPTION: This JSON snippet illustrates the structure for component "props" in Puck Editor. It shows how a "HeadingBlock" component's "type" and "props" (including an auto-generated "id" and "title") are defined, which are then passed to the component's "render()" method.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: JSON
CODE:
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234", // Auto-generated
    "title": "Hello, world"
  }
}
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/data-migration

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck.Preview Component Props API Reference
DESCRIPTION: API documentation for the properties available on the <Puck.Preview> component, detailing their types, descriptions, and default values.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: APIDOC
CODE:
```
Puck.Preview Props:
  id:
    Type: String
    Description: A unique identifier for the preview frame.
    Default: "puck-preview"
    Example: "my-preview-content"
```

--------------------------------

TITLE: Puck Plugin: Introducing New Field Types
DESCRIPTION: Demonstrates how to introduce a new field type ('richText') using a combination of `overrides` and `fieldTransforms`. This example creates an editable rich text field within the editor preview using overlay portals.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
import { registerOverlayPortal } from "@measured/puck";
const plugin = {
  overrides: {
    // Add a richText field type
    fieldTypes: {
      richText: ({ name, value }) => <input name={name} value={value} />,
    },
  },
  fieldTransforms: {
    // Wrap the value in a span, create an overlay portal, and make it editable
    richText: ({ value }) => {
      const handleInput = useCallback(() => {}, []); // Implement your input behavior
      return (
        <span ref={registerOverlayPortal} contentEditable onInput={handleInput}>
          {value}
        </span>
      );
    },
  },
};
```

--------------------------------

TITLE: Configuring Puck Render Component with Custom Components
DESCRIPTION: This example illustrates how to define a custom component, `HeadingBlock`, directly within the `config` prop of the `Render` component. It shows how to specify fields for the component and provide a custom `render` function, extending Puck's rendering capabilities.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: jsx
CODE:
```
export function Example() {
  return (
    <Render
      config={{
        components: {
          HeadingBlock: {
            fields: {
              children: {
                type: "text",
              },
            },
            render: ({ children }) => {
              return <h1>{children}</h1>;
            },
          },
        },
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for the Puck API related to configuration. This covers how to configure Puck's behavior and component settings.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
Puck API - Configuration:
  This section details the API for configuring Puck and its components.

  Config:
    - The root configuration object for Puck.
    - Includes settings for `components`, `locales`, `root` component, etc.

  ComponentConfig:
    - Configuration specific to individual components.
    - Defines properties like `name`, `fields`, `children`, `render` function, etc.

  Example (Config):
    {
      "components": {
        "Box": {"component": "Box", "name": "Box"}
      },
      "root": {"component": "Box"}
    }

  Example (ComponentConfig):
    {
      "name": "Button",
      "fields": [
        {"name": "label", "type": "text", "label": "Button Label"}
      ]
    }
```

--------------------------------

TITLE: External Field Configuration
DESCRIPTION: Demonstrates the basic setup for an 'external' field type, including the required `type` and `fetchList` properties. The `fetchList` function is an asynchronous operation that returns a promise resolving to an array of objects, which are then displayed in a tabular format.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async () => {
            return [
              { title: "Hello, world", description: "Lorem ipsum 1" },
              { title: "Goodbye, world", description: "Lorem ipsum 2" },
            ];
          },
        },
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Dynamic Feature Toggling
DESCRIPTION: Enables instance-specific permissions by dynamically calculating them based on component data using the `resolvePermissions` parameter. This example disables the delete function for a HeadingBlock if its `locked` prop is true.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      resolvePermissions: (data, { permissions }) => {
        if (data.props.locked) {
          return {
            delete: false, // Disable delete function when HeadingBlock `locked` prop is set
          };
        }
        return permissions; // Return inherited permissions (component or global)
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Default Root Configuration with Title Field in Puck Editor
DESCRIPTION: Illustrates the default configuration of the root component in Puck Editor, showing how the `title` text field is rendered within the `render` method. This setup provides a basic user input for the root element.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: JavaScript
CODE:
```
const config = {
  // ...
  root: {
    render: ({ children, title }) => {
      return (
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      );
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Component Prop: children
DESCRIPTION: Documents the 'children' prop, which accepts a ReactNode and serves as the default node for the component's outline. It provides an example of its usage.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/outline

LANGUAGE: APIDOC
CODE:
```
Props:
  children:
    Type: ReactNode
    Example: <div />
    Description: The default node for the outline.
```

--------------------------------

TITLE: Asynchronous Feature Toggling
DESCRIPTION: Allows permissions to be resolved asynchronously, enabling patterns like querying permissions from an endpoint when data changes. This example fetches server permissions based on the component's ID.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      resolvePermissions: async (data) => {
        const serverPermissions = await myPermissionsApi(data.props.id); // Query permissions from a server
        return serverPermissions;
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section details the various APIs available within Puck for components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/overlay-portals

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Provides details on how to define and use components within Puck.
  - Includes information on props, schema, and rendering.

Configuration:
  - Covers the configuration options for setting up Puck, including root configuration and component-specific settings.

Fields:
  - Documents the different types of fields available for component configuration, such as text, number, boolean, and custom fields.

Overrides:
  - Explains how to override default Puck behaviors and UI elements.

Actions:
  - Details the available actions that can be triggered within Puck, such as saving, publishing, or custom actions.

FieldTransforms:
  - Describes how to transform field values before they are used or displayed.

Permissions:
  - Outlines the permission system for controlling access to features and data.

Plugin:
  - Information on the Plugin API for extending Puck's functionality.

PuckApi:
  - Comprehensive reference for the core Puck API, including methods for managing state, rendering, and interacting with the editor.

Theming:
  - Details on how to customize the appearance of Puck using themes.
```

--------------------------------

TITLE: Puck API Reference - Plugin
DESCRIPTION: Documentation for creating and using Puck plugins to extend editor functionality and integrate with external systems.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: APIDOC
CODE:
```
Puck Plugin API:

A plugin is an object with methods that can hook into Puck's lifecycle.

Example Plugin:
{
  name: 'my-custom-plugin',
  initialize: (puckApi) => {
    console.log('Puck plugin initialized');
    // Access Puck API methods here
  },
  onComponentUpdate: (component, changes) => {
    console.log('Component updated:', component, changes);
  }
}

Plugins are passed to the Puck component via the `plugins` prop.
```

--------------------------------

TITLE: usePuck Selector Best Practices
DESCRIPTION: Illustrates correct and incorrect ways to use selectors with the `usePuck` hook to avoid unnecessary re-renders. Emphasizes granular selection and avoiding new object references.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-puck

LANGUAGE: javascript
CODE:
```
// Good: only re-render when the `selectedItem` changes
const selectedItem = usePuck((s) => s.selectedItem);

// Bad: re-render when anything changes
const { selectedItem } = usePuck();
const { selectedItem } = usePuck((s) => s);

// Bad: selector creates a new object reference, causing an infinite comparison loop
const { selectedItem } = usePuck((s) => ({ ...s.selectedItem }));
```

--------------------------------

TITLE: Resolve Data for Component Props
DESCRIPTION: Demonstrates how to use the `resolveData` function within a component's configuration to dynamically set props. This example shows how to assign the value of the 'title' prop to a new 'resolvedTitle' prop.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-props

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
        resolvedTitle: {
          type: "text",
        },
      },
      resolveData: async ({ props }) => {
        return {
          props: {
            resolvedTitle: props.title,
          },
        };
      },
      render: ({ resolvedTitle }) => {
        return <h1>{resolvedTitle}</h1>;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Text Field Parameters API Reference
DESCRIPTION: API documentation for the parameters available when configuring text fields in Puck Editor components, detailing their types, status, and examples.

SOURCE: https://puckeditor.com/docs/api-reference/fields/text

LANGUAGE: APIDOC
CODE:
```
Puck Editor Field Parameters:
  type:
    Description: The type of the field. Must be "text" for Text fields.
    Type: "text" (literal string)
    Status: Required
    Example: type: "text"
  placeholder:
    Description: The placeholder text to display when the field is empty.
    Type: String
    Status: Optional
    Example: placeholder: "Lorem ipsum..."
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Puck Editor componentOverlay Override
DESCRIPTION: This section details how to override the default overlay component in Puck Editor. It explains the purpose of the override, provides a code example using React, and lists the available props with their types and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-overlay

LANGUAGE: APIDOC
CODE:
```
componentOverlay:
  Description: Override the overlay shown on hover or selection of a component.
  Example:
    const overrides = {
      overlay: ({ children }) => <div>{children}</div>,
    };
  Props:
    children: The default node for the overlay. Type: ReactNode
    componentId: The id for the component underneath the overlay. Type: string
    componentType: The type for the component underneath the overlay. Type: string
    hover: Indicates if the component is being hovered over. Type: boolean
    isSelected: Indicates if the component is currently selected. Type: boolean
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Puck API Reference - Permissions and Theming
DESCRIPTION: Information on managing permissions and customizing the theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: APIDOC
CODE:
```
Permissions:
  Managing user permissions within Puck.

PuckApi:
  The main Puck API object for interacting with the editor.

Theming:
  Customizing the visual appearance and theme of Puck.
```

--------------------------------

TITLE: Setting Puck Editor Header Title
DESCRIPTION: This example shows how to set the `headerTitle` prop to customize the title displayed in the Puck editor's header, providing clear identification for the current page or context.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: javascript
CODE:
```
export function Editor() {
  return (
    <Puck
      headerTitle="My page"
      // ...
    />
  );
}
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: Provides an overview of the Puck Editor API, covering various modules and functionalities for extending the editor's behavior and appearance.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/overview

LANGUAGE: APIDOC
CODE:
```
Puck Editor API Reference:

Components: API for managing and interacting with editor components.
Configuration: API for configuring Puck Editor settings.
Fields: API related to data fields within the editor.
Overrides: API for overriding default UI elements and behaviors.
Actions: API for defining and executing custom actions.
FieldTransforms: API for transforming field data.
Permissions: API for managing user permissions.
Plugin: API for developing and integrating plugins.
PuckApi: Core API for Puck Editor functionalities.
Theming: API for customizing the editor's visual theme, including fonts and styles.
```

--------------------------------

TITLE: ComponentData API Reference
DESCRIPTION: Defines the structure for ComponentData, representing an instance of a component within Puck Editor. It includes details on required and optional parameters like 'type', 'props', and 'readOnly', along with usage examples and constraints.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
`ComponentData`
An object representing an instance of a component.
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234",
    "title": "Hello, world"
  }
}
```

## Params
Param | Example | Type | Status  
---|---|---|---
[`type`](https://puckeditor.com/docs/api-reference/data-model/component-data#type) | `type: "HeadingBlock"` | String | Required  
[`props`](https://puckeditor.com/docs/api-reference/data-model/component-data#props) | `props: { id: "12345", title: "Hello, world" }` | Object | Required  
[`readOnly`](https://puckeditor.com/docs/api-reference/data-model/component-data#readonly) | `readOnly: { title: true }` | Object | -

### Required params
####  `type`
The type of the component, which tells Puck to run the [`render()`](https://puckeditor.com/docs/api-reference/configuration/component-config#renderprops) method for the component of the [same key](https://puckeditor.com/docs/api-reference/configuration/config#components).
####  `props`
The props stored based on the [`component config`](https://puckeditor.com/docs/api-reference/configuration/component-config) that Puck will pass to the [`render()`](https://puckeditor.com/docs/api-reference/configuration/component-config#renderprops) method for the component.
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234", // Auto-generated
    "title": "Hello, world"
  }
}
```

Requires a unique `id` prop to be defined.
### Optional params
```

--------------------------------

TITLE: Example Data Payload with Component Fields
DESCRIPTION: Demonstrates the JSON data structure generated by Puck when a component with editable fields is modified. It illustrates how field values are stored within the component's properties in the content array.

SOURCE: https://puckeditor.com/docs/integrating-puck/component-configuration

LANGUAGE: json
CODE:
```
{
  "content": [
    {
      "type": "HeadingBlock",
      "props": {
        "id": "HeadingBlock-1234",
        "title": "Hello, world"
      }
    }
  ],
  "root": {}
}
```

--------------------------------

TITLE: Puck API Reference Links
DESCRIPTION: A list of links to the API reference documentation for various aspects of the Puck editor, including Configuration, Fields, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming.

SOURCE: https://puckeditor.com/docs/index

LANGUAGE: markdown
CODE:
```
* [Configuration](https://puckeditor.com/docs/api-reference/configuration)
* Data Model
* [Fields](https://puckeditor.com/docs/api-reference/fields)
* Functions
* [Overrides](https://puckeditor.com/docs/api-reference/overrides)
* [Actions](https://puckeditor.com/docs/api-reference/actions)
* [FieldTransforms](https://puckeditor.com/docs/api-reference/field-transforms)
* [Permissions](https://puckeditor.com/docs/api-reference/permissions)
* [Plugin](https://puckeditor.com/docs/api-reference/plugin)
* [PuckApi](https://puckeditor.com/docs/api-reference/puck-api)
* [Theming](https://puckeditor.com/docs/api-reference/theming)
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Extending Puck - Theming
DESCRIPTION: Instructions on how to customize the visual appearance (theming) of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Theming:
  - Customizing the look and feel of the Puck editor.
  - Allows for branding and UI consistency.
```

--------------------------------

TITLE: Puck API Reference Links
DESCRIPTION: Provides links to various sections of the Puck API reference documentation, covering overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: APIDOC
CODE:
```
Overrides: https://puckeditor.com/docs/api-reference/overrides
Actions: https://puckeditor.com/docs/api-reference/actions
FieldTransforms: https://puckeditor.com/docs/api-reference/field-transforms
Permissions: https://puckeditor.com/docs/api-reference/permissions
Plugin: https://puckeditor.com/docs/api-reference/plugin
PuckApi: https://puckeditor.com/docs/api-reference/puck-api
Theming: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Integrating Puck - Multi-column Layouts
DESCRIPTION: Instructions on creating multi-column layouts for content within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Multi-column Layouts:
  - Techniques for arranging content in multiple columns using Puck.
  - Enables flexible content structuring and design.
```

--------------------------------

TITLE: Puck Editor Viewport Parameter Reference
DESCRIPTION: This section details the configurable parameters for viewports within the Puck editor. It includes properties such as `width`, `height`, `icon`, and `label`, specifying their types, examples, and whether they are required or optional. These parameters allow customization of how viewports are displayed and behave.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: APIDOC
CODE:
```
Viewport Parameters:
- width:
    Type: number
    Status: Required
    Description: The width of the viewport.
    Example: width: 1440
- height:
    Type: number | "auto"
    Status: Optional (defaults to "auto")
    Description: An optional height for the viewport. Defaults to `auto`, which will fit to the window.
    Example: height: 968
- icon:
    Type: "Smartphone" | "Tablet" | "Monitor" | ReactNode
    Status: Optional
    Description: The icon to show in the viewport switcher. Can be "Smartphone", "Tablet", "Monitor", or a ReactNode. Puck uses Lucide icons.
    Example: icon: "Monitor"
- label:
    Type: string
    Status: Optional
    Description: An optional label for the viewport. This is used for browser tooltip.
    Example: label: "iPhone"
```

--------------------------------

TITLE: Accessing Puck API within Render Lifecycle
DESCRIPTION: Demonstrates how to use the `usePuck` hook to access the Puck API within a component's render lifecycle. It includes an example of using a selector to optimize re-renders by subscribing to specific parts of the API state.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: javascript
CODE:
```
import { createUsePuck } from "@measured/puck";
const usePuck = createUsePuck();

const Example = () => {
  // Use a selector so you only re-render when the selected type changes
  const type = usePuck((s) => s.selectedItem?.type || "Nothing");
  return <h2>{type} selected</h2>;
};
```

--------------------------------

TITLE: Render a Label in ActionBar Component
DESCRIPTION: Demonstrates how to use `<ActionBar.Label>` within an `<ActionBar>` and `<ActionBar.Group>` to display text labels. This example shows a label directly in the ActionBar and another nested within a group alongside an action.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: JSX
CODE:
```
<ActionBar>
  <ActionBar.Label label="Label 1" />
  <ActionBar.Group>
    <ActionBar.Label label="Label 2" />
    <ActionBar.Action>★</ActionBar.Action>
  </ActionBar.Group>
</ActionBar>
```

--------------------------------

TITLE: Puck Editor Extension: Theming
DESCRIPTION: Instructions on customizing the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Theming:

This guide covers customizing the theme of the Puck editor.
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: This section covers the configuration options available for the Puck editor. It details how to set up root configurations, component configurations, and other settings that control the behavior and appearance of the editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-fields

LANGUAGE: APIDOC
CODE:
```
Configuration:
  - Root Configuration: Defines the overall structure and settings for the Puck editor instance.
  - Component Configuration: Specifies how individual components are configured, including their properties and behavior.
```

--------------------------------

TITLE: Dynamically Update Component Fields with resolveFields
DESCRIPTION: This example demonstrates how to use the `resolveFields` function to conditionally update component fields. It returns `lastFields` if `fieldType` has not changed, otherwise it defines a new `title` field based on the `fieldType`.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: JavaScript
CODE:
```
const resolveFields = async ({ props }, { changed, lastFields }) => {
  if (!changed.fieldType) {
    return lastFields;
  }

  return {
    title: {
      type: fieldType,
    },
  };
};
```

--------------------------------

TITLE: JavaScript Example: Puck Editor Select Field 'type' Configuration
DESCRIPTION: Illustrative JavaScript code snippet demonstrating how to set the 'type' property to '"select"' within a component's field definition in the Puck Editor configuration object.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        textAlign: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" }
          ]
        }
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Configure Default Props for Root Fields in Puck Editor
DESCRIPTION: Illustrates how to set initial values for root fields using the `defaultProps` parameter within the root configuration. These values are stored directly in the data payload and automatically populate the corresponding Puck fields upon initialization, providing a consistent starting state.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: JavaScript
CODE:
```
const config = {
  // ...
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" }
    },
    defaultProps: {
      title: "Hello, world",
      description: "Lorem ipsum"
    },
    render: ({ children, title, description }) => {
      return (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      );
    }
  }
};
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: Documentation for customizing the visual appearance of the Puck editor using themes and CSS overrides.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: APIDOC
CODE:
```
Puck Theming API:

Customize Puck's UI by providing theme variables or CSS overrides.

Theme Variables:
  - --puck-color-primary: Primary color.
  - --puck-color-secondary: Secondary color.
  - --puck-font-family: Default font family.

CSS Overrides:
  You can provide a CSS file or style object to override default styles.
  Example:
    .puck-editor {
      border: 1px solid red;
    }
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Rendered HTML output from PuckEditor configuration
DESCRIPTION: Illustrates the HTML output generated by the PuckEditor configuration, showing how the root render function wraps the HeadingBlock component.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: HTML
CODE:
```
<!-- root render -->
<div>
  <!-- HeadingBlock render -->
  <h1>Hello, world</h1>
  <!-- Remaining nodes -->
</div>

```

--------------------------------

TITLE: Example Usage of ActionBar.Group
DESCRIPTION: This snippet demonstrates how to embed ActionBar.Group components within an ActionBar to create distinct sections for actions. It shows two groups, 'Group 1' and 'Group 2', nested inside a parent ActionBar.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: JSX
CODE:
```
<ActionBar label="Actions">
  <ActionBar.Group>Group 1</ActionBar.Group>
  <ActionBar.Group>Group 2</ActionBar.Group>
</ActionBar>
```

--------------------------------

TITLE: Customize Puck.Fields wrapFields prop in React
DESCRIPTION: This example illustrates how to use the `wrapFields` prop with the <Puck.Fields> component to control the padding and border around top-level fields. Setting `wrapFields` to `false` disables the default wrapping behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-fields

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Puck.Fields wrapFields={false} />
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Object Field Type Specification
DESCRIPTION: Illustrates the required 'type' parameter for an object field, which must be set to 'object'. This example shows how to define an 'items' field as an object with a nested 'title' field of type 'text'.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "object",
          objectFields: {
            title: { type: "text" },
          },
        },
      },
      // ...
    },
  },
};

```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Create a Custom Field in Puck
DESCRIPTION: Demonstrates how to create a custom field in Puck using the 'custom' field type. The example shows a basic input element rendered within the field and how to update the Puck data payload using the 'onChange' function.

SOURCE: https://puckeditor.com/docs/extending-puck/custom-fields

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <input
              defaultValue={value}
              name={name}
              onChange={(e) => onChange(e.currentTarget.value)}
              style={{ border: "1px solid black", padding: 4 }}
            />
          ),
        },
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/theming

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Configuration'. This section likely covers how to configure Puck's behavior and settings.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Configuration
  - Information on configuring Puck's settings and behavior.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/configuration
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Data Syncing with resolveData
DESCRIPTION: Illustrates how to keep external data in sync by using the `resolveData` function in conjunction with the 'external' field type. This example re-fetches data for a specific item when the page loads or when the data changes, ensuring the component displays the latest information.

SOURCE: https://puckeditor.com/docs/integrating-puck/external-data-sources

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async () => {
            // Query an API for a list of items
            const items = await fetch(`/api/items`).then((res) => res.json());
            // [
            //   { title: "Hello, world", id: 0 },
            //   { title: "Goodbye, world", id: 1 },
            // ];
            return items;
          },
        },
      },
      resolveData: async ({ props }, { changed }) => {
        if (!props.data) return { props };
        // Don't query unless `data` has changed since resolveData was last run
        if (!changed.data) return { props };
        // Re-query the API for a particular item
        const latestData = await fetch(`/api/items/${props.data.id}`).then(
          (res) => res.json()
        );
        // { title: "Hello, world", description: "Lorem ipsum 1", id: 0 }
        return {
          props: {
            // Update the value for `data`
            data: latestData,
          },
        };
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Puck ActionBar Components API
DESCRIPTION: API documentation for the ActionBar and its related components.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck ActionBar Components:

* <ActionBar>:
  - Description: A component for displaying action items in a bar.

* <ActionBar.Action>:
  - Description: Represents an individual action within the ActionBar.

* <ActionBar.Group>:
  - Description: Groups related actions within the ActionBar.

* <ActionBar.Label>:
  - Description: Displays a label within the ActionBar.
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API, focusing on the 'Plugin' API. This section likely details how to create and use plugins with Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Plugin API
  - Documentation for creating and integrating plugins with Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Using Metadata with Puck Render Component
DESCRIPTION: This example illustrates how to pass an optional `metadata` object to the `Render` component. The `metadata` becomes accessible within the `render` function of individual components via the `puck` object, enabling dynamic content or behavior based on global context.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: jsx
CODE:
```
export function Example() {
  return (
    <Render
      metadata={{ title: "Hello, world" }}
      config={{
        HeadingBlock: {
          render: ({ puck }) => {
            return <h1>{puck.metadata.title}</h1>; // "Hello, world"
          },
        },
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Implement Puck UI Override with Custom Component Item
DESCRIPTION: This example demonstrates how to use the `overrides` prop in the Puck component to customize the rendering of component items in the UI. It shows how to replace the default component item display with a custom React element, changing its background color to hotpink.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: JavaScript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck
      // ...
      overrides={{
        // Render a custom element for each item in the component list
        componentItem: ({ name }) => (
          <div style={{ backgroundColor: "hotpink" }}>{name}</div>
        ),
      }}
    />
  );
}
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for configuring Puck, covering aspects like component settings, root configurations, and layout management.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  Details on how to configure individual components within Puck.

Root Configuration:
  Configuration for the root of the Puck editor instance.

Multi-column Layouts:
  Guidelines for creating multi-column layouts using Puck.

Categories:
  How to categorize components and fields in Puck.

Dynamic Props:
  Managing dynamic properties for components.

Dynamic Fields:
  Creating and using dynamic fields in Puck.

External Data Sources:
  Integrating external data sources with Puck.

React Server Components:
  Using Puck with React Server Components.

Data Migration:
  Strategies for migrating data within Puck.

Viewports:
  Configuring and managing viewports in Puck.

Feature Toggling:
  Implementing feature toggles within Puck.

Overlay Portals:
  Using overlay portals for UI elements.
```

--------------------------------

TITLE: Puck Plugin Field Transforms
DESCRIPTION: Shows how to use `fieldTransforms` within a Puck plugin to modify the appearance or behavior of specific field types in the editor. This example makes all fields powered by the 'text' type appear pink.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
const plugin = {
  fieldTransforms: {
    // Make all props powered by "text" field pink in the editor
    text: ({ value }) => <span style={{ color: "hotpink" }}>{value}</span>,
  },
};
```

--------------------------------

TITLE: Configure Slot field with 'allow' parameter
DESCRIPTION: This example shows how to use the optional 'allow' parameter to restrict which components can be dragged into the slot. This configuration applies at the field definition level and can be overridden by the 'allow' prop passed to the render function.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        content: {
          type: "slot",
          allow: ["HeadingBlock"]
        }
      }
      // ...
    }
  }
};
```

--------------------------------

TITLE: Documenting `children` Prop for PuckEditor Component
DESCRIPTION: This snippet documents the `children` prop, which is essential for defining the default content or structure within a PuckEditor component. It specifies its type as `ReactNode` and provides an example of its usage.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/components

LANGUAGE: APIDOC
CODE:
```
Prop: children
  Description: The default node for the component list.
  Type: ReactNode
  Example: <div />
```

--------------------------------

TITLE: Loading a Puck Plugin
DESCRIPTION: Demonstrates how to load a custom Puck plugin by passing it to the `plugins` prop of the `<Puck>` component. This allows for extending Puck's functionality with custom features.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";
import myPlugin from "my-puck-plugin";
export function Editor() {
  return (
    <Puck
      // ...
      plugins={[myPlugin]}
    />
  );
}
```

--------------------------------

TITLE: Display Puck page data as JSON using usePuck and composition
DESCRIPTION: Illustrates how to access and display the `appState.data` from Puck's internal API within a React component's render lifecycle. This example uses `createUsePuck` and `usePuck` to integrate with Puck's state, showcasing a practical application with composition to render page data.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: javascript
CODE:
```
import { Puck, createUsePuck } from "@measured/puck";

const usePuck = createUsePuck();

const JSONRenderer = () => {
  const appState = usePuck((s) => s.appState);

  return <div>{JSON.stringify(appState.data)}</div>;
};

export function Editor() {
  return (
    <Puck>
      <JSONRenderer />
    </Puck>
  );
}
```

--------------------------------

TITLE: initialQuery - External Field
DESCRIPTION: Specifies the initial search query string when the 'external' field type is configured to show a search input. This pre-populates the search bar with a given query, allowing users to start with a filtered list. It's used in conjunction with the `showSearch` option.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async ({ query }) => {
            return [
              { title: "Apple", description: "Lorem ipsum 1" },
              { title: "Orange", description: "Lorem ipsum 2" },
            ].filter((item) => {
              // ...
            });
          },
          showSearch: true,
          initialQuery: "Apple",
        },
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: JavaScript: Synchronous Dynamic Permission Resolution
DESCRIPTION: Demonstrates how to dynamically resolve component permissions based on component data. This example disables the 'delete' permission for a 'HeadingBlock' component if its 'locked' property is true, otherwise, it returns the inherited permissions.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      resolvePermissions: (data, { permissions }) => {
        if (data.props.locked) {
          return {
            delete: false // Disable delete function when HeadingBlock `locked` prop is set
          };
        }

        return permissions; // Return inherited permissions (component or global)
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor readOnly Property Example
DESCRIPTION: Demonstrates the usage of the `readOnly` property within a Puck Editor component's data model. This property specifies which fields are set to read-only, preventing direct user modification.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: json
CODE:
```
{
  "type": "HeadingBlock",
  "props": {
    "id": "HeadingBlock-1234",
    "title": "Hello, world"
  },
  "readOnly": {
    "title": true
  }
}
```

--------------------------------

TITLE: Configure Puck Editor Initial History State
DESCRIPTION: Sets the initial undo/redo history state for the Puck editor using the `initialHistory` prop. This allows pre-populating the editor's history with specific states, ensuring a consistent starting point for users. It requires an array of history states and an index.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: JavaScript
CODE:
```
const historyState = {
  data: {
    root: {
      props: { title: "My History" },
    },
  },
};

export function Editor() {
  return (
    <Puck
      initialHistory={{
        histories: [{ state: historyState }],
        index: 0,
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for configuring Puck's behavior and appearance, including component definitions, field types, and rendering logic.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: APIDOC
CODE:
```
Puck Configuration API:

Configuration Object:
  components: An object mapping component IDs to their definitions.
    Example:
      {
        'my-component': {
          component: MyComponent,
          fields: [
            { name: 'title', type: 'text' },
            { name: 'count', type: 'number' }
          ]
        }
      }
  fields: An object mapping field types to their corresponding React components.
  renderRoot: A function to render the root of the component tree.
  rootId: The ID of the root component.
  plugins: An array of Puck plugins to enable.
```

--------------------------------

TITLE: Pass 'allow' prop to Slot render function
DESCRIPTION: This example demonstrates how to pass the 'allow' prop directly to the Slot's render function. This runtime configuration overrides any 'allow' setting defined at the field level, providing dynamic control over allowed components.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      render: ({ content: Content }) => {
        return <Content allow={["HeadingBlock"]} />;
      }
    }
  }
};
```

--------------------------------

TITLE: Using Puck Composition
DESCRIPTION: Demonstrates how to use the `<Puck>` component to enable custom editor interfaces by providing children, including `<Puck.Preview>` and `<Puck.Components>`.

SOURCE: https://puckeditor.com/docs/extending-puck/composition

LANGUAGE: javascript
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gridGap: 16 }}
      >
        <div>
          {/* Render the drag-and-drop preview */}
          <Puck.Preview />
        </div>
        <div>
          {/* Render the component list */}
          <Puck.Components />
        </div>
      </div>
    </Puck>
  );
}
```

--------------------------------

TITLE: Configure a Slot field in Puck
DESCRIPTION: This example demonstrates how to define a 'slot' field within a component's configuration in Puck. The slot's content is passed as a render function to the component's render method, allowing nested components to be rendered.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        content: {
          type: "slot"
        }
      },
      render: ({ content: Content }) => {
        return <Content />;
      }
    },
    Card: {
      render: () => <div>Hello, world</div>
    }
  }
};
```

--------------------------------

TITLE: Configure Dynamic Component Props with resolveData
DESCRIPTION: This example demonstrates how to use the `resolveData` function within a component's configuration to dynamically update props. It shows how to set the `resolvedTitle` prop to the value of the `title` prop, illustrating how to modify component data after user input or external API calls.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-props

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text"
        },
        resolvedTitle: {
          type: "text"
        }
      },
      resolveData: async ({ props }) => {
        return {
          props: {
            resolvedTitle: props.title
          }
        };
      },
      render: ({ resolvedTitle }) => {
        return <h1>{resolvedTitle}</h1>;
      }
    }
  }
};
```

--------------------------------

TITLE: Preventing Duplicate Calls with `changed` Param
DESCRIPTION: Optimizes asynchronous permission resolution by checking the `changed` parameter to ensure expensive operations are only performed when specific props change. This example prevents re-fetching permissions if the `locked` prop has not changed.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      // ...
      resolvePermissions: async (data, { changed, lastPermissions }) => {
        if (!changed.locked) return lastPermissions; // Return last permissions if `locked` hasn't changed
        return await myExpensivePermissionsApi(data),
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Pass 'minEmptyHeight' prop to Slot render function
DESCRIPTION: This example shows how to set the 'minEmptyHeight' prop on the Slot's render function. This property defines the minimum height of the slot when it contains no components, ensuring visibility and usability for drag-and-drop.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      render: () => {
        return <Content minEmptyHeight={256} />;
      }
    }
  }
};
```

--------------------------------

TITLE: Override Root Fields with Custom Title and Description in Puck Editor
DESCRIPTION: Demonstrates how to extend the root component's fields by providing a custom `fields` configuration. This example redefines the default `title` field and adds a new `description` textarea field. The `render` method is updated to reflect and utilize these new fields, allowing for more complex root metadata.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: JavaScript
CODE:
```
const config = {
  // ...
  root: {
    fields: {
      title: { type: "text" }, // You need to redefine the `title` field if we want to retain it
      description: { type: "textarea" }
    },
    render: ({ children, title, description }) => {
      return (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      );
    }
  }
};
```

--------------------------------

TITLE: Puck Editor: Configure a Number Field
DESCRIPTION: Example configuration for defining a 'number' type field named `myNumber` within a Puck Editor component. The field's value is then passed to and rendered by the component.

SOURCE: https://puckeditor.com/docs/api-reference/fields/number

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        myNumber: {
          type: "number"
        }
      },
      render: ({ myNumber }) => {
        return <div>{myNumber}</div>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section details the various API endpoints and functionalities available in Puck for managing components, configuration, fields, and more.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: APIDOC
CODE:
```
Components API:
  - Reference for component-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration API:
  - Reference for configuration-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Fields API:
  - Reference for field-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/fields

Overrides API:
  - Reference for override-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/overrides

Actions API:
  - Reference for action-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms API:
  - Reference for FieldTransforms-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions API:
  - Reference for permission-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin API:
  - Reference for plugin-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi API:
  - Reference for PuckApi-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming API:
  - Reference for theming-related functionalities.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Transforming legacy component props in Puck data
DESCRIPTION: This example demonstrates how to use `transformProps` from `@measured/puck` to update a legacy prop name (`title`) to a new one (`heading`) within a data payload. It shows the initial data structure and the resulting transformed data.

SOURCE: https://puckeditor.com/docs/integrating-puck/data-migration

LANGUAGE: javascript
CODE:
```
import { transformProps } from "@measured/puck";

const config = {
  // Renamed `title` prop to `heading`
  HeadingBlock: ({ heading }) => <h1>{heading}</h1>,
};

const data = {
  content: [
    // HeadingBlock references the legacy `title` prop
    { type: "HeadingBlock", props: { title: "Hello, world" } },
  ],
};

const updatedData = transformProps(data, {
  // Map `heading` to the legacy `title` prop
  HeadingBlock: ({ title, ...props }) => ({ heading: title, ...props }),
});

console.log(updatedData);
// { content: [{ type: "HeadingBlock", props: { heading: "Hello, world" } }] };
```

--------------------------------

TITLE: Puck Editor Integration: Multi-column Layouts
DESCRIPTION: Instructions on implementing multi-column layouts within Puck, allowing for more complex page structures.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Multi-column Layouts:

This guide explains how to create and manage multi-column layouts using Puck.
```

--------------------------------

TITLE: Custom Field Implementation in Puck
DESCRIPTION: Demonstrates how to implement a custom field type in Puck Editor. This allows for unique UI components within your Puck setup. It extends the base field functionality and requires a render function to define the custom UI.

SOURCE: https://puckeditor.com/docs/api-reference/fields/custom

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";
const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <input
              defaultValue={value}
              name={name}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
          ),
        },
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      },
    },
  },
};

```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by the Puck editor library. It includes components for building UI elements like action bars, drawers, drop zones, and the core Puck editor itself. Each component's documentation outlines its props, usage, and any associated sub-components.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: APIDOC
CODE:
```
<ActionBar>
  - A component for creating action bars within the Puck editor.
  - Sub-components:
    - <ActionBar.Action>: Represents an individual action item.
    - <ActionBar.Group>: Groups multiple action items.
    - <ActionBar.Label>: Displays a label within the action bar.

<AutoField>
  - Automatically generates form fields based on data types.

<Drawer>
  - A component for creating side drawers or panels.
  - Sub-components:
    - <Drawer.Item>: Represents an item within the drawer.

<DropZone>
  - Enables drag-and-drop functionality for components or data.

<FieldLabel>
  - Displays a label for form fields.

<Puck>
  - The main Puck editor component.
  - Sub-components:
    - <Puck.Components>: Manages available components.
    - <Puck.Fields>: Manages available fields.
    - <Puck.Outline>: Renders the outline view of the edited content.
    - <Puck.Preview>: Renders a preview of the edited content.

<Render>
  - A utility component for rendering content within Puck.
```

--------------------------------

TITLE: Get Permissions by Item
DESCRIPTION: Retrieves permissions for a specific component instance by its `item` property. It resolves dynamic permissions based on the `resolvePermissions` parameter. This function might be redefined after resolving dynamic permissions, so it's often used within a `useEffect` hook.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: javascript
CODE:
```
getPermissions({
  item: { type: "HeadingBlock", props: { id: "Heading-1234" } }, // Get resolved permissions for Heading-1234
});
// { delete: false }
```

--------------------------------

TITLE: Configure Number Field Step Interval Parameter
DESCRIPTION: Illustrates how to define the stepping interval for a number field using the 'step' parameter. This controls the increment/decrement value when interacting with the field, for example, via spinner buttons.

SOURCE: https://puckeditor.com/docs/api-reference/fields/number

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        myNumber: {
          type: "number",
          step: 0.1,
        },
      },
      // ...
    },
  },
};
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck Component Configuration with resolveData for Title Mapping
DESCRIPTION: Demonstrates how to use `resolveData` within a Puck component configuration to transform a `title` prop into a `resolvedTitle` prop, and set `resolvedTitle` as read-only. This example shows a common pattern for data transformation and read-only field management.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      resolveData: async ({ props }) => {
        return {
          props: { resolvedTitle: props.title },
          readOnly: { resolvedTitle: true },
        };
      },
      render: ({ resolvedTitle }) => <h1>{resolvedTitle}</h1>,
    },
  },
};
```

--------------------------------

TITLE: JavaScript: Optimized Asynchronous Permission Resolution with Change Detection
DESCRIPTION: Shows how to prevent unnecessary asynchronous calls by checking which component properties have changed. This example avoids re-fetching permissions from 'myExpensivePermissionsApi' if the 'locked' property has not changed, returning the last known permissions instead.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      // ...
      resolvePermissions: async (data, { changed, lastPermissions }) => {
        if (!changed.locked) return lastPermissions; // Return last permissions if `locked` hasn't changed

        return await myExpensivePermissionsApi(data);
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Extension: Theming
DESCRIPTION: Instructions on customizing the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Theming:

This guide covers customizing the theme of the Puck editor.
```

--------------------------------

TITLE: Map selected item properties for page data in Puck Editor
DESCRIPTION: Explains how to use `mapProp` to transform the shape of an item selected by the user before it's written to the page data. This example extracts only the `description` property from the selected item.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async () => {
            return [
              { title: "Hello, world", description: "Lorem ipsum 1" },
              { title: "Goodbye, world", description: "Lorem ipsum 2" }
            ];
          },
          mapProp: (item) => item.description
        }
      },
      render: ({ data }) => {
        return <p>{data || "No data selected"}</p>;
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Extending Puck - Theming
DESCRIPTION: Instructions on how to customize the visual appearance (theming) of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Theming:
  - Customizing the look and feel of the Puck editor.
  - Allows for branding and UI consistency.
```

--------------------------------

TITLE: Puck Editor Radio Field Configuration Example
DESCRIPTION: This JavaScript snippet illustrates how to define a 'radio' type field within a Puck Editor component's configuration. It demonstrates setting up an array of options, each with a `label` and `value`, and specifies a `defaultProps` value for the field. This configuration enables rendering a radio input with predefined choices in the editor.

SOURCE: https://puckeditor.com/docs/api-reference/fields/radio

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" }
          ]
        }
      },
      defaultProps: {
        textAlign: "left"
      },
      render: ({ textAlign }) => {
        return <p style={{ textAlign }}>Hello, world</p>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor Integration: Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Viewports:

This guide explains how to configure and manage viewports for responsive design in Puck.
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: Information on how to theme the Puck editor to match specific design requirements.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Theming:
  - Customization of the Puck editor's visual appearance.
  - Allows for applying custom themes and styles.
```

--------------------------------

TITLE: Pass 'collisionAxis' prop to Slot render function
DESCRIPTION: This example illustrates setting the 'collisionAxis' prop on the Slot's render function. This property controls how Puck detects collisions for drag-and-drop operations, allowing customization for different layout scenarios.

SOURCE: https://puckeditor.com/docs/api-reference/fields/slot

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      render: ({ content: Content }) => {
        return <Content collisionAxis="dynamic" />;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor JavaScript Configuration for Object Fields
DESCRIPTION: A JavaScript configuration example demonstrating how to define an object field named 'items' within a component. It shows the usage of `type: "object"` and `objectFields` to define nested properties like 'title'.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        items: {
          type: "object",
          objectFields: {
            title: { type: "text" }
          }
        }
      }
      // ...
    }
  }
};
```

--------------------------------

TITLE: Setting Default Props in Puck Editor
DESCRIPTION: This example demonstrates how to configure default properties for a component in Puck Editor. The `defaultProps` object is used to specify initial values for component fields, such as the 'title' field in the 'HeadingBlock' component. These defaults are stored in the data payload and populate the Puck fields when a new component instance is created.

SOURCE: https://puckeditor.com/docs/integrating-puck/component-configuration

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Hello, world",
      },
      render: ({ title }) => {
        return <h1>{title}</h1>;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor Configuration API Reference
DESCRIPTION: Reference for the Puck Editor configuration API, detailing the structure and purpose of various configuration properties and arguments.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
ComponentConfig:
  data: Object
    props: Object
      Example: { props: { title: "Hello, world" }, readOnly: {} }
      Description: A partial props object containing modified props. Will be spread into the other props.
    readOnly: Object
      Example: { props: { title: "Hello, world" }, readOnly: {} }
      Description: A partial object describing fields to set as readonly. Will be spread into the existing readOnly state.
  resolveFields(data, params): Function
    Description: Dynamically set the fields for this component. Supports asynchronous calls. This function is triggered when the component data changes.
    Args:
      data: Object
        props: Object
          Description: The current props for the selected component.
        readOnly: Object
          Description: The fields currently set to read-only for this component.
      params: Object
        appState: Object
          Description: An object describing the AppState.
        changed: Object
          Description: An object describing which props have changed on this component since the last time this function was called.
        fields: Object
          Description: The static fields for this component as defined by `fields`.
        lastData: Object
          Description: The data object from the previous run of this function.
        lastFields: Object
          Description: The last fields object created by the previous run of this function.
        parent: Object
          Description: The parent data object if this item is within a DropZone.
```

--------------------------------

TITLE: JavaScript Example: Customizing Puck Component Item Display
DESCRIPTION: This JavaScript snippet illustrates how to use the `componentItem` override to render a custom display for individual items in the Puck component list. It takes the component's `name` as a prop and displays it within a `div` element.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-item

LANGUAGE: JavaScript
CODE:
```
const overrides = {
  componentItem: ({ name }) => <div>{name}</div>,
};
```

--------------------------------

TITLE: Puck API Reference - Plugin
DESCRIPTION: Documentation for the Puck API related to plugins. This explains how to create and use plugins to extend Puck's functionality.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
Puck API - Plugin:
  This section details the API for creating and managing plugins in Puck.

  Plugin Functionality:
    - Extend Puck with custom components, fields, or editor behaviors.
    - Plugins are loaded and registered with the Puck editor.

  Example Plugin Structure:
    // plugin.js
    export const plugin = {
      name: 'MyCustomPlugin',
      components: { /* custom components */ },
      fields: { /* custom fields */ },
      // other extension points
    };

    // In your Puck initialization:
    import { Puck } from '@puckeditor/core';
    import { plugin } from './plugin';

    const puck = new Puck({ plugins: [plugin] });
```

--------------------------------

TITLE: Puck Editor Features Overview
DESCRIPTION: This section outlines the main features of the Puck editor, detailing how to integrate custom components, configure layouts, manage dynamic props and fields, and utilize advanced features like Server Components and data migration.

SOURCE: https://puckeditor.com/docs/index

LANGUAGE: markdown
CODE:
```
Feature | Description  
---|---
[Component Configuration](https://puckeditor.com/docs/integrating-puck/component-configuration) | Integrate your own components with Puck by providing render functions and configuring fields that map to your props.  
[Root Configuration](https://puckeditor.com/docs/integrating-puck/root-configuration) | Customize the root component that wraps all other Puck components.  
[Multi-column Layouts](https://puckeditor.com/docs/integrating-puck/multi-column-layouts) | Create multi-column layouts using nested components. Now supports advanced CSS layouts.  
[Categories](https://puckeditor.com/docs/integrating-puck/categories) | Group your components in the side bar.  
[Dynamic Props](https://puckeditor.com/docs/integrating-puck/dynamic-props) | Dynamically set props after user input and mark fields as read-only  
[Dynamic Fields](https://puckeditor.com/docs/integrating-puck/dynamic-fields) | Dynamically set fields based on user input  
[External Data Sources](https://puckeditor.com/docs/integrating-puck/external-data-sources) | Load content from a third-party CMS or other data source  
[Server Components](https://puckeditor.com/docs/integrating-puck/server-components) | Opt-in support for React Server Components  
[Data Migration](https://puckeditor.com/docs/integrating-puck/data-migration) | Migrate between breaking Puck releases and your own breaking prop changes  
[Viewports](https://puckeditor.com/docs/integrating-puck/viewports) | Preview and edit your content in a same-origin iframe to simulate different viewports  
[Feature Toggling](https://puckeditor.com/docs/integrating-puck/feature-toggling) | Toggle Puck features, like duplication or deletion, via the permissions API.  
```

--------------------------------

TITLE: Puck Component Definition with Text Field
DESCRIPTION: This JavaScript configuration defines an 'Example' component in Puck. It includes a 'title' field of type 'text' and a render function that displays the value of this field within a paragraph tag. This demonstrates how to integrate a simple text input into a custom Puck component.

SOURCE: https://puckeditor.com/docs/api-reference/fields/text

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "text"
        }
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Permissions API Overview
DESCRIPTION: This API documentation describes the various types of permissions available in Puck and the methods to control them. It covers how to set permissions globally, per component, or dynamically, and how to extend the permission system.

SOURCE: https://puckeditor.com/docs/api-reference/permissions

LANGUAGE: APIDOC
CODE:
```
Permissions:
  Purpose: Enable toggling of Puck features.
  Types:
    1. Global permissions: Shared across the entire Puck application. Controlled via the `permissions` prop on the `<Puck>` component.
    2. Component permissions: Allow feature control for all instances of a given component type. Controlled by the `permissions` component config API.
    3. Dynamic permissions: Enable control after each data change, ideal for per-instance component permissions. Controlled by the `resolvePermissions` component config API.

  APIs for Setting Permissions:
    1. Global `permissions` prop: Used on the `<Puck>` component.
    2. Component `permissions` parameter: Part of the component config API.
    3. Component `resolvePermissions` parameter: Part of the component config API, takes `data` and `params`.

  APIs for Extending Permissions:
    1. `getPermissions`
    2. `refreshPermissions`

  Supported Permissions:
    | Param    | Example        | Type    | Default   | Status |
    |----------|----------------|---------|-----------|--------|
    | `delete` | `delete: true` | Boolean | `true`    | -      |
    | `drag`   | `drag: true`   | Boolean | `true`    | -      |
    | `edit`   | `edit: true`   | Boolean | `true`    | -      |
    | `insert` | `insert: true` | Boolean | `true`    | -      |
    | `...custom` | `myPerm: true` | Boolean | `undefined` | -      |

  Permission Details:
    - `delete`: Enable deletion of components.
```

--------------------------------

TITLE: Puck Editor Core Concepts
DESCRIPTION: This section outlines the fundamental concepts and building blocks of the Puck editor, including components, configuration, data models, fields, overrides, actions, and theming. It provides an overview of how to extend and customize Puck's functionality.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: APIDOC
CODE:
```
Puck Editor Core Concepts:

Components:
  - Reusable UI elements that can be configured and arranged within the editor.

Configuration:
  - Settings that control the behavior and appearance of Puck, including root and component-specific configurations.

Data Model:
  - The structure used to represent the content and layout managed by Puck.

Fields:
  - Input elements used for configuring component properties, supporting various data types and custom transformations.

Overrides:
  - Mechanisms to customize the default behavior or appearance of Puck's UI elements.

Actions:
  - Functions or operations that can be triggered within the editor, such as data manipulation or state changes.

FieldTransforms:
  - Functions that modify or validate data entered into fields.

Permissions:
  - Controls for managing user access and capabilities within the editor.

Plugin:
  - A system for extending Puck's functionality with custom components, fields, and behaviors.

PuckApi:
  - The central API object providing access to Puck's core functionalities.

Theming:
  - Options for customizing the visual theme and styling of the Puck editor interface.
```

--------------------------------

TITLE: Puck Editor API Reference Overview
DESCRIPTION: This section outlines the various API reference categories available for Puck Editor, detailing components, configuration, data models, fields, functions, overrides, actions, field transforms, permissions, plugins, the Puck API, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Components: https://puckeditor.com/docs/api-reference/components
  Configuration: https://puckeditor.com/docs/api-reference/configuration
  Data Model: (Not specified)
  Fields: https://puckeditor.com/docs/api-reference/fields
  Functions: (Not specified)
  Overrides: https://puckeditor.com/docs/api-reference/overrides
  Actions: https://puckeditor.com/docs/api-reference/actions
  FieldTransforms: https://puckeditor.com/docs/api-reference/field-transforms
  Permissions: https://puckeditor.com/docs/api-reference/permissions
  Plugin: https://puckeditor.com/docs/api-reference/plugin
  PuckApi: https://puckeditor.com/docs/api-reference/puck-api
  Theming: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: Documentation for the Puck API related to theming. This covers how to customize the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Puck API - Theming:
  This section describes the API for customizing the visual theme of the Puck editor.
  Apply custom styles and branding to the editor interface.
  
  ThemingConfig:
    - An object defining theme properties.
    - Properties:
      - primaryColor: string
      - secondaryColor: string
      - fontFamily: string
      - fontSize: string
      - etc.
  
  setTheme(themeConfig: ThemingConfig): void
    - Applies a custom theme to the Puck editor.
    - Parameters:
      - themeConfig: An object containing theme customization properties.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming. It details the available functions, their parameters, and usage within Puck.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/overview

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for component API.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for configuration API.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Fields:
  - Reference for field API.
  - Link: https://puckeditor.com/docs/api-reference/fields

Overrides:
  - Reference for overrides API.
  - Link: https://puckeditor.com/docs/api-reference/overrides

Actions:
  - Reference for actions API.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Reference for field transforms API.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Reference for permissions API.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Reference for plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Reference for theming API.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: Information on how to theme the Puck editor to match specific design requirements.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Puck Theming:
  - Customization of the Puck editor's visual appearance.
  - Allows for applying custom themes and styles.
```

--------------------------------

TITLE: Dynamic Data Resolution with resolveData
DESCRIPTION: The `resolveData` function enables dynamic modification of component props and setting fields as read-only. It supports asynchronous operations and is triggered on component render, field changes, or explicit calls to `resolveAllData`. This example maps the 'title' prop to a read-only 'resolvedTitle' prop.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      resolveData: async ({ props }) => {
        return {
          props: { resolvedTitle: props.title },
          readOnly: { resolvedTitle: true },
        };
      },
      render: ({ resolvedTitle }) => <h1>{resolvedTitle}</h1>,
    },
  },
};

const resolveData = async ({ props }) => {
  return {
    props: { resolvedTitle: props.title },
  };
};

const resolveData = async ({ props }, { changed }) => {
  if (!changed.title) {
    return { props };
  }
  return {
    props: { resolvedTitle: props.title },
  };
};

const resolveData = async ({ props }, { metadata }) => {
  return {
    props: { title: metadata.title || props.title },
  };
};
```

--------------------------------

TITLE: Modify item display in table using mapRow in Puck Editor
DESCRIPTION: Shows how to use `mapRow` to alter the appearance of an item within the table display without affecting the actual selected data. This example converts the `title` property to uppercase for display purposes.

SOURCE: https://puckeditor.com/docs/api-reference/fields/external

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async () => {
            return [
              { title: "Hello, world", description: "Lorem ipsum 1" },
              { title: "Goodbye, world", description: "Lorem ipsum 2" }
            ];
          },
          mapRow: (item) => ({ ...item, title: item.title.toUpperCase() })
        }
      },
      render: ({ data }) => {
        return <p>{data || "No data selected"}</p>;
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck Core Components API
DESCRIPTION: Documentation for Puck's core components used for integration and rendering.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Core Components:

* DropZone:
  - Description: Place droppable regions (zones) inside other components to enable nested components.
  - Usage: Used for creating nested component structures.

* Puck:
  - Description: Render the Puck editor.
  - Usage: The main component to initialize and display the Puck editor interface.

* Render:
  - Description: Render a Data object for a given Config.
  - Parameters:
    - data: The data object to render.
    - config: The configuration object defining the editor's structure.
  - Usage: Used to display content managed by Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: JavaScript Example: Overriding Puck Fields Wrapper
DESCRIPTION: This snippet illustrates how to customize the 'fields' wrapper in Puck's API. By defining a 'fields' property within the 'overrides' object, developers can replace the default wrapper with a custom React component, here a simple div, to control the rendering of field containers.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/fields

LANGUAGE: JavaScript
CODE:
```
const overrides = {
  fields: ({ children }) => <div>{children}</div>,
};
```

--------------------------------

TITLE: Dynamically Resolve Component Fields using resolveFields in Puck
DESCRIPTION: This JavaScript code demonstrates how to use the `resolveFields` function within a Puck component configuration to dynamically alter the available fields based on existing component properties. The example shows how to conditionally add a `waterType` field if the `drink` property is set to 'water', illustrating how to make synchronous and asynchronous changes to field configurations.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-fields

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    MyComponent: {
      resolveFields: (data) => {
        const fields = {
          drink: {
            type: "radio",
            options: [
              { label: "Water", value: "water" },
              { label: "Orange juice", value: "orange-juice" }
            ]
          }
        };

        if (data.props.drink === "water") {
          return {
            ...fields,
            waterType: {
              // ... Define field
            }
          };
        }

        return fields;
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck Editor Integration: Viewports
DESCRIPTION: Details on configuring and managing different viewports for responsive design testing within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Viewports:

This guide explains how to configure and manage viewports for responsive design in Puck.
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: This section covers the configuration options available for Puck, allowing developers to customize its behavior and appearance.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: APIDOC
CODE:
```
Puck Configuration API:

This API provides access to various configuration settings for Puck, enabling customization of its behavior and appearance.

Key Configuration Areas:
  - Component Configuration: Define how components are registered and behave within Puck.
  - Root Configuration: Configure the root settings for the Puck editor instance.
  - Multi-column Layouts: Set up and manage multi-column layouts for content.
  - Categories: Organize and categorize components for easier selection.
  - Dynamic Props: Define and manage dynamic properties for components.
  - Dynamic Fields: Create and manage dynamic form fields.
  - External Data Sources: Integrate with external data sources for content.
  - React Server Components: Configure support for React Server Components.
  - Data Migration: Handle data migration tasks for Puck content.
  - Viewports: Define and manage different viewport sizes for previewing content.
  - Feature Toggling: Enable or disable specific Puck features.
  - Overlay Portals: Configure overlay portal behavior.
  - Theming: Customize the visual theme of the Puck editor.
  - Plugin API: Define and manage custom plugins for extending Puck.
  - UI Overrides: Override default UI elements and behaviors.
  - Permissions: Manage user permissions within the Puck editor.

Refer to the specific documentation links for detailed configuration options within each area.
```

--------------------------------

TITLE: Override Puck Editor Text Fields with Custom Input
DESCRIPTION: This example shows how to globally override all text fields in Puck Editor with a custom HTML input element. It utilizes the `fieldTypes` override within the `<Puck>` component, specifically targeting the 'text' field type to apply custom styling and behavior.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: JSX
CODE:
```
import { Puck } from "@measured/puck";

export function Editor() {
  return (
    <Puck
      // ...
      overrides={{
        fieldTypes: {
          // Override all text fields with a custom input
          text: ({ name, onChange, value }) => (
            <input
              defaultValue={value}
              name={name}
              onChange={(e) => onChange(e.currentTarget.value)}
              style={{ border: "1px solid black", padding: 4 }}
            />
          )
        }
      }}
    />
  );
}
```

--------------------------------

TITLE: Puck Editor Integration: Multi-column Layouts
DESCRIPTION: Instructions on implementing multi-column layouts within Puck, allowing for more complex page structures.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Multi-column Layouts:

This guide explains how to create and manage multi-column layouts using Puck.
```

--------------------------------

TITLE: Update Puck UI state and field value simultaneously
DESCRIPTION: Illustrates how to use the onChange function within a custom field's render prop to not only update the field's value but also modify the global Puck UI state. This example shows how to close the left sidebar when a specific field is changed, providing interactive control over the editor's UI.

SOURCE: https://puckeditor.com/docs/extending-puck/custom-fields

LANGUAGE: javascript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        title: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <input
              defaultValue={value}
              name={name}
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  // Close the left side bar when this field is changed
                  { leftSideBarVisible: false }
                )
              }
              style={{ border: "1px solid black", padding: 4 }}
            />
          ),
        },
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      },
    },
  },
};
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Define an Object Field in Puck Component Configuration
DESCRIPTION: This example demonstrates how to define an 'object' field type within a Puck component's configuration. The 'object' field can contain nested fields, such as a 'text' field for a title, allowing for structured data input. The component then renders the value of the nested 'title' field.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        params: {
          type: "object",
          objectFields: {
            title: { type: "text" }
          }
        }
      },
      render: ({ params }) => {
        return <p>{params.title}</p>;
      }
    }
  }
};
```

--------------------------------

TITLE: Puck Editor: Synchronize External Data with resolveData
DESCRIPTION: This example illustrates how to maintain data synchronization between an external source and a Puck Editor component. By combining the 'external' field with the `resolveData` function, the component can re-fetch the latest data for a selected item. The `changed` parameter is used to optimize queries, ensuring data is only re-fetched if the external data selection has changed.

SOURCE: https://puckeditor.com/docs/integrating-puck/external-data-sources

LANGUAGE: JavaScript
CODE:
```
const config = {
  components: {
    Example: {
      fields: {
        data: {
          type: "external",
          fetchList: async () => {
            // Query an API for a list of items
            const items = await fetch(`/api/items`).then((res) => res.json());
            // [
            //   { title: "Hello, world", id: 0 },
            //   { title: "Goodbye, world", id: 1 },
            // ];

            return items;
          }
        }
      },
      resolveData: async ({ props }, { changed }) => {
        if (!props.data) return { props };

        // Don't query unless `data` has changed since resolveData was last run
        if (!changed.data) return { props };

        // Re-query the API for a particular item
        const latestData = await fetch(`/api/items/${props.data.id}`).then(
          (res) => res.json()
        );
        // { title: "Hello, world", description: "Lorem ipsum 1", id: 0 }

        return {
          props: {
            // Update the value for `data`
            data: latestData
          }
        };
      },
      // ...
    }
  }
};
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically detailing the 'Components' section. This likely covers how to define and manage React components within the Puck editor environment.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Components: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck Data Migration using migrate
DESCRIPTION: Demonstrates how to use the `migrate` helper method from `@measured/puck` to transform legacy data payloads to the latest data model. This is useful for handling breaking changes in major releases.

SOURCE: https://puckeditor.com/docs/integrating-puck/data-migration

LANGUAGE: javascript
CODE:
```
import { migrate } from "@measured/puck";
migrate(legacyData);
```

--------------------------------

TITLE: Override Puck Editor Field Types with Custom React Components
DESCRIPTION: This JavaScript snippet demonstrates how to override default field types in the Puck Editor using custom React components. It shows examples for 'number' and 'text' field types, allowing developers to provide custom input elements and handle `onChange` events for data binding.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/field-types

LANGUAGE: JavaScript
CODE:
```
const overrides = {
  fieldTypes: {
    number: ({ onChange }) => (
      <input type="number" onChange={(e) => onChange(e.currentTarget.value)} />
    ),
    text: ({ onChange }) => (
      <input type="text" onChange={(e) => onChange(e.currentTarget.value)} />
    ),
    // ...
  }
};
```

--------------------------------

TITLE: Puck Editor Extension: Theming
DESCRIPTION: Instructions on customizing the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Theming:

This guide covers customizing the theme of the Puck editor.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming. It details the available functions, their parameters, and usage within Puck.

SOURCE: https://puckeditor.com/docs/extending-puck/theming

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for component API.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for configuration API.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Fields:
  - Reference for field API.
  - Link: https://puckeditor.com/docs/api-reference/fields

Overrides:
  - Reference for overrides API.
  - Link: https://puckeditor.com/docs/api-reference/overrides

Actions:
  - Reference for actions API.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Reference for field transforms API.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Reference for permissions API.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Reference for plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Reference for theming API.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Integrating Puck - Data Migration
DESCRIPTION: Instructions and considerations for migrating data into or between Puck projects.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Data Migration:
  - Processes and strategies for migrating content data.
  - Ensures smooth transitions when updating or moving Puck data.
```

--------------------------------

TITLE: Puck Editor Helper Components API
DESCRIPTION: Documentation for helper components used in Puck Editor. This includes components like ActionBar, Drawer, and FieldLabel, along with their respective sub-components and usage within the Puck editor framework.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
ActionBar:
  Description: An action bar containing a series of actions, normally used with the actionBar override.
  Related Components: ActionBar.Action, ActionBar.Group, ActionBar.Label
  Usage Context: Typically used with the actionBar override.

ActionBar.Action:
  Description: An action for use within the ActionBar component.

ActionBar.Group:
  Description: A group of actions for use within the ActionBar component.

ActionBar.Label:
  Description: A label for use within the ActionBar component.

Drawer:
  Description: A reference list of items that can be dragged into a droppable area, normally Puck.Preview.
  Related Components: Drawer.Item
  Usage Context: Used for drag-and-drop functionality with droppable areas like Puck.Preview.

Drawer.Item:
  Description: An item that can be dragged from a Drawer.

FieldLabel:
  Description: Render a styled `label` when creating custom fields.
  Usage Context: Used when defining custom fields in Puck Editor.
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck API Reference - Permissions and Theming
DESCRIPTION: Information on managing permissions and customizing the theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: APIDOC
CODE:
```
Permissions:
  Managing user permissions within Puck.

PuckApi:
  The main Puck API object for interacting with the editor.

Theming:
  Customizing the visual appearance and theme of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Theming'. This section likely covers how to customize the visual appearance of Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Theming
  - Information on customizing the visual theme of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Basic Usage of Drawer.Item Component
DESCRIPTION: Demonstrates the basic integration of the <Drawer.Item> component within a Puck editor, showing how to render a simple draggable item named "Orange" inside a <Drawer>.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: javascript
CODE:
```
import { Puck, Drawer } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Drawer>
        <Drawer.Item name="Orange" />
      </Drawer>
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section details the various APIs available within Puck for components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-props

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Provides details on how to define and use components within Puck.
  - Includes information on props, schema, and rendering.

Configuration:
  - Covers the configuration options for setting up Puck, including root configuration and component-specific settings.

Fields:
  - Documents the different types of fields available for component configuration, such as text, number, boolean, and custom fields.

Overrides:
  - Explains how to override default Puck behaviors and UI elements.

Actions:
  - Details the available actions that can be triggered within Puck, such as saving, publishing, or custom actions.

FieldTransforms:
  - Describes how to transform field values before they are used or displayed.

Permissions:
  - Outlines the permission system for controlling access to features and data.

Plugin:
  - Information on the Plugin API for extending Puck's functionality.

PuckApi:
  - Comprehensive reference for the core Puck API, including methods for managing state, rendering, and interacting with the editor.

Theming:
  - Details on how to customize the appearance of Puck using themes.
```

--------------------------------

TITLE: Integrating Puck - Data Migration
DESCRIPTION: Instructions and considerations for migrating data into or between Puck projects.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Data Migration:
  - Processes and strategies for migrating content data.
  - Ensures smooth transitions when updating or moving Puck data.
```

--------------------------------

TITLE: Puck Editor API Reference - Plugin
DESCRIPTION: Documentation for the Puck Editor API concerning 'Plugin'. This section details the API for creating and managing plugins that extend Puck's functionality.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Plugin: https://puckeditor.com/docs/api-reference/plugin
```

--------------------------------

TITLE: Puck API Reference - Plugin API
DESCRIPTION: Documentation for the Puck Plugin API. This explains how to create and register plugins to extend Puck's functionality.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Puck Plugin API:
  This section details the API for creating and managing Puck plugins.
  Plugins allow you to extend Puck's core functionality.
  
  Plugin:
    - An object representing a Puck plugin.
    - Properties:
      - name: string - The unique name of the plugin.
      - initialize: (api: PuckApi) => void - A function called when the plugin is initialized.
      - unload: () => void (optional) - A function called when the plugin is unloaded.
  
  registerPlugin(plugin: Plugin): void
    - Registers a new plugin with the Puck editor.
    - Parameters:
      - plugin: The plugin object to register.
  
  PuckApi:
    - An interface providing access to Puck's core functionalities within a plugin.
    - Methods:
      - registerComponent(config: ComponentConfig): void
      - registerFieldType(type: string, config: FieldType): void
      - registerAction(action: Action): void
      - registerOverride(overrides: Override): void
      - setPermissions(permissions: Permissions): void
      - getConfiguration(): Config
      - dispatch(action: EditorAction): void
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck API Reference: Drawer Component
DESCRIPTION: API documentation for the Puck `<Drawer>` component. It outlines its purpose, props, and required props.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: APIDOC
CODE:
```
<Drawer>
A list of items that can be dragged into a [`<Puck.Preview>`](https://puckeditor.com/docs/api-reference/components/puck-preview). Used for composing custom Puck UIs.

## Props
Param | Example | Type | Status  
---|---|---|---
[`children`](https://puckeditor.com/docs/api-reference/components/drawer#children) | `children: <Drawer.Item />` | ReactNode | Required

## Required props
(No specific required props listed beyond children in this section)
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: Documentation for the Puck API related to theming. This explains how to customize the visual appearance of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
Puck API - Theming:
  This section details the API for customizing the theme of the Puck editor.

  Theming Options:
    - Control colors, fonts, spacing, and other visual aspects.
    - Can be applied globally or to specific components.

  Example:
    // Applying a custom theme:
    {
      "theme": {
        "colors": {
          "primary": "#007bff",
          "secondary": "#6c757d"
        },
        "fonts": {
          "body": "Arial, sans-serif"
        }
      }
    }
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/composition

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: resolveAllData API Documentation
DESCRIPTION: Detailed API documentation for the resolveAllData function, including its arguments, return values, and related functions.

SOURCE: https://puckeditor.com/docs/api-reference/functions/resolve-all-data

LANGUAGE: APIDOC
CODE:
```
# resolveAllData
Utility function to execute all [`resolveData` methods](https://puckeditor.com/docs/api-reference/configuration/component-config#resolvedatadata-params) on a data payload outside of the [`<Puck>`](https://puckeditor.com/docs/api-reference/components/puck) editor, returning the updated value.

This is useful if you need to run your resolvers before passing your data to [`<Render>`](https://puckeditor.com/docs/api-reference/components/render).

## Args
Param | Example | Type  
---|---|---
`data` | `{}` | [Data](https://puckeditor.com/docs/api-reference/data-model/data)  
`config` | `{ components: {} }` | [Config](https://puckeditor.com/docs/api-reference/configuration/config)  

## Returns
The updated [Data](https://puckeditor.com/docs/api-reference/data-model/data) object.

[ Previous registerOverlayPortal ](https://puckeditor.com/docs/api-reference/functions/register-overlay-portal)[ Next setDeep ](https://puckeditor.com/docs/api-reference/functions/set-deep)
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by the Puck library for building and managing content. It includes components for action bars, drawers, drop zones, fields, and the core Puck editor itself.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-preview

LANGUAGE: APIDOC
CODE:
```
ActionBar:
  A component for displaying actions in the Puck editor.

ActionBar.Action:
  Represents a single action within an ActionBar.

ActionBar.Group:
  Groups multiple ActionBar.Action components.

ActionBar.Label:
  Displays a label within an ActionBar.

AutoField:
  Automatically generates a form field based on data type.

Drawer:
  A component for creating side panels or drawers.

Drawer.Item:
  An individual item within a Drawer.

DropZone:
  A component that allows users to drop elements into a designated area.

FieldLabel:
  A label for a form field.

Puck:
  The main Puck editor component.

Puck.Components:
  Provides access to registered Puck components.

Puck.Fields:
  Provides access to registered Puck fields.

Puck.Outline:
  Renders an outline view of the Puck content.

Puck.Preview:
  Renders a preview of the Puck content.

Render:
  A component for rendering Puck content.
```

--------------------------------

TITLE: Puck API Reference - Configuration and Data
DESCRIPTION: This section covers the API references for Puck's configuration options, data model, fields, functions, overrides, actions, field transforms, permissions, plugins, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Core API References:

Configuration:
  - Description: Defines how Puck is configured, including root and component settings.
  - Related: Component Configuration, Root Configuration.

Data Model:
  - Description: The structure and format of data managed by Puck.

Fields:
  - Description: API for defining and using custom input fields within Puck.
  - Related: Custom Fields, Field Transforms.

Functions:
  - Description: Utility functions available within the Puck environment.

Overrides:
  - Description: Allows customization of Puck's UI and behavior.
  - Related: UI overrides.

Actions:
  - Description: Defines custom actions that can be triggered within Puck.

FieldTransforms:
  - Description: Functions to transform field data before saving or rendering.
  - Related: Field Transforms.

Permissions:
  - Description: Manages user permissions within the Puck editor.

Plugin:
  - Description: API for developing and integrating Puck plugins.
  - Related: Plugin API.

PuckApi:
  - Description: The central API object providing access to Puck's core functionalities.

Theming:
  - Description: API for customizing the visual appearance of Puck.
  - Related: Theming.
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck Editor Integration: Multi-column Layouts
DESCRIPTION: Instructions on implementing multi-column layouts within Puck, allowing for more complex page structures.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Multi-column Layouts:

This guide explains how to create and manage multi-column layouts using Puck.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section details the various APIs available within Puck for components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Provides details on how to define and use components within Puck.
  - Includes information on props, schema, and rendering.

Configuration:
  - Covers the configuration options for setting up Puck, including root configuration and component-specific settings.

Fields:
  - Documents the different types of fields available for component configuration, such as text, number, boolean, and custom fields.

Overrides:
  - Explains how to override default Puck behaviors and UI elements.

Actions:
  - Details the available actions that can be triggered within Puck, such as saving, publishing, or custom actions.

FieldTransforms:
  - Describes how to transform field values before they are used or displayed.

Permissions:
  - Outlines the permission system for controlling access to features and data.

Plugin:
  - Information on the Plugin API for extending Puck's functionality.

PuckApi:
  - Comprehensive reference for the core Puck API, including methods for managing state, rendering, and interacting with the editor.

Theming:
  - Details on how to customize the appearance of Puck using themes.
```

--------------------------------

TITLE: Puck Editor API Reference - PuckApi
DESCRIPTION: Documentation for the core 'PuckApi' in Puck Editor. This section provides details on the main API object used for interacting with and controlling the Puck editor.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  PuckApi: https://puckeditor.com/docs/api-reference/puck-api
```

--------------------------------

TITLE: Integrating Puck - React Server Components
DESCRIPTION: Information on integrating Puck with React Server Components (RSC).

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: markdown
CODE:
```
## React Server Components Integration

Puck can be integrated with React Server Components (RSC) to leverage server-side rendering and data fetching capabilities.

### Considerations for RSC:

*   **Client vs. Server Components:** Understand which parts of your application are server components and which are client components.
*   **Data Fetching:** Server components can fetch data directly, while client components might need to pass data down or use client-side fetching libraries.
*   **Serialization:** Ensure that data passed between server and client components is serializable.

### Example Scenario:

Your Puck configuration might define components that are rendered on the server, and the editor itself runs on the client. Data edited in the client-side Puck editor would then be sent back to the server to update the content rendered by server components.

```javascript
// Example: Server Component (e.g., in app/page.js)
import { PuckEditor } from '@puckeditor/react';
import { config } from '../puck.config';

async function Page() {
  const initialData = await fetchInitialContent(); // Fetch content from your CMS or API

  return (
    <div>
      <h1>My Page</h1>
      <PuckEditor config={config} data={initialData} />
    </div>
  );
}

export default Page;
```
```

--------------------------------

TITLE: DropZone API Reference
DESCRIPTION: Provides an overview of the DropZone component's API, including its props and considerations for React server components.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: APIDOC
CODE:
```
DropZone:
  Props:
    style: object
      - Description: Provide a style attribute to the DropZone. The default DropZone styles will still be applied.
      - Example: style={{ display: "flex" }}

  React Server Components:
    - Description: DropZones do not work with React server components by default due to context reliance.
    - Solution: Use the `renderDropZone` method passed to your component render function.
    - Related: `componentConfig.props.puckRenderDropZone`
```

--------------------------------

TITLE: Puck.Outline Component API Reference
DESCRIPTION: API documentation for the `Puck.Outline` component, detailing its properties and configuration options. This component does not accept any props.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: APIDOC
CODE:
```
Puck.Outline Component
  Props:
    (None) - This component does not accept any props.
```

--------------------------------

TITLE: Puck API Reference - Functions
DESCRIPTION: This section details the available functions within the Puck API, including `migrate` for data payload transformations and `transformProps` for component prop migrations.

SOURCE: https://puckeditor.com/docs/integrating-puck/data-migration

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Functions:
  migrate(legacyData: any): any
    - Description: Transforms legacy data payloads to the latest data model.
    - Parameters:
      - legacyData: The data payload to migrate.
    - Returns: The migrated data payload.

  transformProps(data: any, transforms: Record<string, (props: any) => any>): any
    - Description: Transforms component props within a data payload based on provided mapping functions.
    - Parameters:
      - data: The data payload containing component props.
      - transforms: An object where keys are component names and values are functions that transform props.
    - Returns: The data payload with transformed props.
    - Example:
      const data = { content: [{ type: "HeadingBlock", props: { title: "Hello" } }] };
      const transforms = { HeadingBlock: ({ title, ...props }) => ({ heading: title, ...props }) };
      const updatedData = transformProps(data, transforms);
      // updatedData will have { content: [{ type: "HeadingBlock", props: { heading: "Hello" } }] }
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section details the API reference for Puck, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, PuckApi, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/component-overlay

LANGUAGE: APIDOC
CODE:
```
Puck Editor API Reference:

Components:
  - Reference for Puck components.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for Puck configuration options.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Data Model:
  - Information about the data model used by Puck.

Fields:
  - Reference for Puck fields.
  - Link: https://puckeditor.com/docs/api-reference/fields

Functions:
  - Details on available functions within Puck.

Overrides:
  - Documentation for overriding Puck's UI elements.
  - actionBar: https://puckeditor.com/docs/api-reference/overrides/action-bar
  - componentItem: https://puckeditor.com/docs/api-reference/overrides/component-item
  - components: https://puckeditor.com/docs/api-reference/overrides/components
  - fieldLabel: https://puckeditor.com/docs/api-reference/overrides/field-label
  - fieldTypes: https://puckeditor.com/docs/api-reference/overrides/field-types
  - fields: https://puckeditor.com/docs/api-reference/overrides/fields
  - headerActions: https://puckeditor.com/docs/api-reference/overrides/header-actions
  - header: https://puckeditor.com/docs/api-reference/overrides/header
  - iframe: https://puckeditor.com/docs/api-reference/overrides/iframe
  - outline: https://puckeditor.com/docs/api-reference/overrides/outline
  - preview: https://puckeditor.com/docs/api-reference/overrides/preview
  - puck: https://puckeditor.com/docs/api-reference/overrides/puck
  - componentOverlay: https://puckeditor.com/docs/api-reference/overrides/component-overlay
  - drawer: https://puckeditor.com/docs/api-reference/overrides/drawer
  - drawerItem: https://puckeditor.com/docs/api-reference/overrides/drawer-item

Actions:
  - Reference for actions available in Puck.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Documentation for field transforms.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Information on permissions management.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Details on the Plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for the PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Information on theming Puck.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API concerning 'Actions'. This section would detail the available actions that can be performed within the editor, such as saving, undoing, or applying changes.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Actions: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck Editor Configuration API Reference
DESCRIPTION: Provides a comprehensive reference for configuring the Puck Editor. It details parameters for organizing components into categories, managing component visibility, and setting default states.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Configuration:
  components: Object
    Description: An object where keys are component names and values are component definitions.
    Example: {
      "MyComponent": {
        "component": "div",
        "props": {"style": {"color": "red"}},
        "children": "Hello"
      }
    }

  root: Object
    Description: The root component of the Puck Editor.
    Example: {
      "component": "div",
      "props": {"style": {"padding": "20px"}},
      "children": [
        // Other components or content
      ]
    }

  categories: Object
    Description: An object for organizing components into categories.
    Example: {
      "layout": {
        "title": "Layout Components",
        "visible": true,
        "defaultExpanded": false,
        "components": [
          "Box",
          "Stack"
        ]
      },
      "other": {
        "title": "Other Components",
        "visible": true,
        "defaultExpanded": true,
        "components": [
          "Button",
          "Input"
        ]
      }
    }

  categories[key].components: Array<string>
    Description: An array of component names belonging to this category.

  categories[key].title: string
    Description: The display title for the category.

  categories[key].visible: boolean
    Description: Determines if the category is visible in the UI.

  categories[key].defaultExpanded: boolean
    Description: Sets the default expanded state of the category.

  categories["other"]:
    Description: The default category for all uncategorized components. Receives all other categories params.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides an overview of the Puck Editor's API, covering components, configuration, fields, functions, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/theming/fonts

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for Puck components and their usage.

Configuration:
  - Details on configuring Puck, including root and component-level settings.

Fields:
  - Information on available field types and how to use them.

Functions:
  - Utility functions provided by Puck.

Overrides:
  - How to override default Puck behaviors and UI elements.

Actions:
  - Available actions that can be triggered within Puck.

FieldTransforms:
  - Documentation for transforming field data.

Permissions:
  - Information on managing permissions within Puck.

Plugin:
  - Details on the Plugin API for extending Puck's functionality.

PuckApi:
  - Comprehensive reference for the Puck API.

Theming:
  - Guides on customizing the appearance of Puck, including fonts and overall theming.
```

--------------------------------

TITLE: Puck Editor API Reference - Configuration
DESCRIPTION: This section details the API reference for Puck Editor's configuration options. It covers the main 'Config' type and the 'ComponentConfig' type, which are essential for setting up Puck's behavior and component definitions.

SOURCE: https://puckeditor.com/docs/api-reference/configuration

LANGUAGE: APIDOC
CODE:
```
API Reference - Configuration:
  Config
    - Description: Main configuration type for Puck.
  ComponentConfig
    - Description: Configuration for individual components within Puck.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: Documentation for Puck's built-in React components used for building visual editing interfaces. This includes components for action bars, drawers, drop zones, fields, and the main Puck editor itself.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: APIDOC
CODE:
```
Puck Components API:

<ActionBar>
  Description: A component to display actions in the Puck editor.
  Usage: Used to group related actions.

<ActionBar.Action>
  Description: Represents a single action within an ActionBar.
  Props:
    onClick: Function to call when the action is clicked.
    label: Text to display for the action.

<ActionBar.Group>
  Description: Groups multiple ActionBar.Action components.

<ActionBar.Label>
  Description: Displays a label within an ActionBar.

<AutoField>
  Description: Automatically renders a form field based on the provided schema.
  Props:
    field: The field configuration object.
    value: The current value of the field.
    onChange: Function to call when the field value changes.

<Drawer>
  Description: A component for creating side panels or drawers in the UI.

<Drawer.Item>
  Description: An item within a Drawer.

<DropZone>
  Description: A component that allows users to drop elements into a designated area.
  Props:
    onDrop: Function to call when an item is dropped.
    children: Content to display within the drop zone.

<FieldLabel>
  Description: Renders a label for a form field.

<Puck>
  Description: The main Puck editor component.
  Props:
    componentTree: The current component tree structure.
    onChange: Function to call when the component tree changes.
    config: Puck configuration object.

<Puck.Components>
  Description: A context provider for Puck components.

<Puck.Fields>
  Description: A context provider for Puck fields.

<Puck.Outline>
  Description: Renders an outline view of the component tree.

<Puck.Preview>
  Description: Renders a preview of the current component tree.

<Render>
  Description: A component for rendering Puck components dynamically.
  Props:
    component: The component definition to render.
    props: Props to pass to the component.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section details the various APIs available within Puck for components, configuration, fields, overrides, actions, field transforms, permissions, plugins, and theming.

SOURCE: https://puckeditor.com/docs/integrating-puck/viewports

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Provides details on how to define and use components within Puck.
  - Includes information on props, schema, and rendering.

Configuration:
  - Covers the configuration options for setting up Puck, including root configuration and component-specific settings.

Fields:
  - Documents the different types of fields available for component configuration, such as text, number, boolean, and custom fields.

Overrides:
  - Explains how to override default Puck behaviors and UI elements.

Actions:
  - Details the available actions that can be triggered within Puck, such as saving, publishing, or custom actions.

FieldTransforms:
  - Describes how to transform field values before they are used or displayed.

Permissions:
  - Outlines the permission system for controlling access to features and data.

Plugin:
  - Information on the Plugin API for extending Puck's functionality.

PuckApi:
  - Comprehensive reference for the core Puck API, including methods for managing state, rendering, and interacting with the editor.

Theming:
  - Details on how to customize the appearance of Puck using themes.
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck Editor API Reference - Components
DESCRIPTION: Documentation for the Puck Editor API, specifically focusing on the 'Components' section. This likely details how to define and manage components within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Components
  - Details on how to define and manage components within Puck.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/components
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: This section covers the theming capabilities of the Puck editor, explaining how to customize the visual appearance and styling of the editor and its components.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck

LANGUAGE: APIDOC
CODE:
```
Theming:
  - Allows customization of the visual theme and styling of the Puck editor.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by the Puck library for building and managing content. It includes components for action bars, drawers, drop zones, fields, and core Puck functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Components API:

<ActionBar>
  - Description: A component for displaying action items in a bar.
  - Usage: Used to group related actions.

<ActionBar.Action>
  - Description: Represents an individual action item within an ActionBar.
  - Usage: Typically contains an icon and an onClick handler.

<ActionBar.Group>
  - Description: Groups multiple ActionBar.Action components.

<ActionBar.Label>
  - Description: Displays a label within an ActionBar.

<AutoField>
  - Description: Automatically generates a form field based on data type.
  - Parameters:
    - name: The name of the field.
    - label: The display label for the field.
    - type: The data type of the field (e.g., 'text', 'number', 'boolean').

<Drawer>
  - Description: A component for creating slide-out panels.
  - Usage: Used for settings, menus, or detailed views.

<Drawer.Item>
  - Description: Represents an item within a Drawer.

<DropZone>
  - Description: A component that allows users to drop files or components.
  - Usage: For uploading assets or reordering elements.

<FieldLabel>
  - Description: A label component for form fields.

<Puck>
  - Description: The main Puck editor component.
  - Usage: Renders the entire Puck editing interface.

<Puck.Components>
  - Description: Provides access to registered Puck components.

<Puck.Fields>
  - Description: Provides access to registered Puck fields.

<Puck.Outline>
  - Description: Renders an outline view of the current Puck structure.

<Puck.Preview>
  - Description: Renders a preview of the content being edited.

<Render>
  - Description: A utility component for rendering dynamic content.
```

--------------------------------

TITLE: API Reference for ActionBar.Action Component Props
DESCRIPTION: This section details the available properties for the `<ActionBar.Action>` React component, including required and optional props, their types, and descriptions. It covers `children`, `onClick`, and `label`.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
ActionBar.Action Component:
  Props:
    children:
      Type: ReactNode
      Description: A node to render as the children of the action. Should be a string or an icon. Puck uses Lucide icons.
      Required: true
    onClick:
      Type: Function
      Description: An onClick callback triggered when the user clicks the action.
      Parameters:
        e: Event
      Required: true
    label:
      Type: String
      Description: A label to provide an accessible label when using icon.
      Required: false
```

--------------------------------

TITLE: Puck Plugin API Structure and Usage
DESCRIPTION: This section outlines the structure of a Puck plugin, which primarily implements the `overrides` API. It also details how plugins are registered with the main `Puck` component and explains the concept of plugin currying, where overrides are applied sequentially.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: APIDOC
CODE:
```
Puck Plugin API:
  - Purpose: Enables developers to distribute plugins to customize the Puck interface.
  - Status: Highly experimental, likely to experience breaking changes.

Plugin Structure:
  MyPlugin: object
    overrides: object
      componentItem: function
        - Parameters: { name: string }
        - Returns: ReactNode (e.g., JSX element)
        - Description: A function that overrides the rendering of a component item.

Puck Component Integration:
  Puck: React Component
    props:
      plugins: Array<object>
        - Type: Array of plugin objects (e.g., [MyPlugin])
        - Description: An array of plugin objects to be applied to the Puck editor.

Plugin Currying:
  - Concept: Plugins are rendered in the order they are defined.
  - Behavior: Unless specified, all overrides are curried, meaning the return node of one plugin is passed as `children` to the next.
  - Best Practices:
    1. Implement as few override methods as needed.
    2. Always render `children` if possible to ensure compatibility.
```

--------------------------------

TITLE: Puck Editor Extension: Theming
DESCRIPTION: Instructions on customizing the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Theming:

This guide covers customizing the theme of the Puck editor.
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck Render Component API Reference
DESCRIPTION: Detailed API documentation for the `Render` component's props, including their types, status (required/optional), and a brief description of their purpose. This outlines the contract for interacting with the `Render` component.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: APIDOC
CODE:
```
Render Component Props:
  config:
    Type: Config
    Status: Required
    Description: An object describing the available components, fields and more. See the Config docs for a full reference.
  data:
    Type: Data
    Status: Required
    Description: The data to render against the provided config. See the Data docs for a full reference.
  metadata:
    Type: Metadata
    Status: Optional
    Description: An object containing additional data provided to each component’s render and resolveData functions.
```

--------------------------------

TITLE: Puck Drawer Components API
DESCRIPTION: API documentation for the Drawer component and its items.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Drawer Components:

* <Drawer>:
  - Description: A component that displays content in a sliding drawer.

* <Drawer.Item>:
  - Description: Represents an item within the Drawer.
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck Editor API Reference - Permissions
DESCRIPTION: Documentation for the Puck Editor API related to 'Permissions'. This section likely covers how to manage user permissions and access control within the Puck editor environment.

SOURCE: https://puckeditor.com/docs/integrating-puck/root-configuration

LANGUAGE: APIDOC
CODE:
```
API Reference:
  Permissions: https://puckeditor.com/docs/api-reference/permissions
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by the Puck editor library. It includes components for building UI elements like action bars, drawers, drop zones, and the core Puck editor itself. Each component's documentation outlines its props, usage, and any associated sub-components.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-fields

LANGUAGE: APIDOC
CODE:
```
<ActionBar>
  - A component for creating action bars within the Puck editor.
  - Sub-components:
    - <ActionBar.Action>: Represents an individual action item.
    - <ActionBar.Group>: Groups multiple action items.
    - <ActionBar.Label>: Displays a label within the action bar.

<AutoField>
  - Automatically generates form fields based on data types.

<Drawer>
  - A component for creating side drawers or panels.
  - Sub-components:
    - <Drawer.Item>: Represents an item within the drawer.

<DropZone>
  - Enables drag-and-drop functionality for components or data.

<FieldLabel>
  - Displays a label for form fields.

<Puck>
  - The main Puck editor component.
  - Sub-components:
    - <Puck.Components>: Manages available components.
    - <Puck.Fields>: Manages available fields.
    - <Puck.Outline>: Renders the outline view of the edited content.
    - <Puck.Preview>: Renders a preview of the edited content.

<Render>
  - A utility component for rendering content within Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/data-model

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/plugin

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck Editor API References
DESCRIPTION: API references for key components of the Puck Editor. Includes the main PuckApi, the usePuck hook for managing Puck instances, and the useGetPuck hook for retrieving Puck instances.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: APIDOC
CODE:
```
PuckApi:
  - Reference for the core Puck API.

usePuck:
  - React hook for managing Puck instances within components.
  - Usage: const puck = usePuck();

useGetPuck:
  - React hook for retrieving an existing Puck instance.
  - Usage: const puck = useGetPuck();
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/api-reference/actions

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck Editor Component Configuration Parameters
DESCRIPTION: This section details various parameters available within the component configuration of Puck Editor. It covers application state, change tracking, permissions, and last known data/permissions.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
params.appState:
  Description: Represents the current state of the application.
  Type: Any

params.changed:
  Description: Indicates whether changes have been made.
  Type: Boolean

params.permissions:
  Description: Holds information about user permissions.
  Type: Object

params.lastData:
  Description: Stores the last known data associated with an element.
  Type: Any

params.lastPermissions:
  Description: Stores the last known permissions associated with an element.
  Type: Object

Returns:
  Description: Information about the return values of specific functions or components.
  Type: Any
```

--------------------------------

TITLE: ActionBar.Group Component API Reference
DESCRIPTION: Detailed API documentation for the ActionBar.Group component, outlining its available properties and their types, status, and descriptions.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
ActionBar.Group:
  Description: Render an action group in the <ActionBar>.
  Props:
    children:
      Type: ReactNode
      Status: Required
      Example: <div />
      Description: A node to render as the children of the action. If a fragment, the items will be rendered in a flex row. Normally contains <ActionBar.Action>.
```

--------------------------------

TITLE: FieldLabel Component Usage
DESCRIPTION: Demonstrates the basic usage of the FieldLabel component with a label prop.

SOURCE: https://puckeditor.com/docs/api-reference/components/field-label

LANGUAGE: javascript
CODE:
```
import { FieldLabel } from "@measured/puck";
const CustomField = () => (
  <FieldLabel label="Title">
    <input />
  </FieldLabel>
);
// ...
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/api-reference/plugins

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by Puck for building and managing content. It includes components for action bars, drawers, drop zones, fields, and the core Puck editor itself.

SOURCE: https://puckeditor.com/docs/api-reference/components/drop-zone

LANGUAGE: APIDOC
CODE:
```
Puck Components API:

This API provides a set of React components for building and managing content within Puck.

Components:
  - <ActionBar>: A component for creating action bars within the Puck editor.
    - <ActionBar.Action>: Represents an individual action within an ActionBar.
    - <ActionBar.Group>: Groups multiple actions within an ActionBar.
    - <ActionBar.Label>: Displays a label within an ActionBar.
  - <AutoField>: Automatically generates form fields based on data types.
  - <Drawer>: A component for creating side drawers or panels.
    - <Drawer.Item>: Represents an item within a Drawer.
  - <DropZone>: A component that allows users to drop content into a designated area.
  - <FieldLabel>: Displays a label for a form field.
  - <Puck>: The main Puck editor component.
    - <Puck.Components>: Provides access to Puck's built-in components.
    - <Puck.Fields>: Provides access to Puck's built-in fields.
    - <Puck.Outline>: Renders an outline view of the Puck content.
    - <Puck.Preview>: Renders a preview of the Puck content.
  - <Render>: A component for rendering content within Puck.

Usage:
Import and use these components within your React application to leverage Puck's editing capabilities.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: Documentation for the Puck API related to components. This section details how to interact with and define components within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
Puck API - Components:
  This section details the API for managing and defining components within Puck.

  Component Definition:
    - Define the structure and properties of components that can be used in the visual editor.
    - Includes properties like `component`, `name`, `fields`, `children`, etc.

  Example:
    {
      "component": "Box",
      "name": "Box Component",
      "fields": [
        {
          "name": "backgroundColor",
          "type": "color",
          "label": "Background Color"
        }
      ],
      "children": true
    }
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: Documentation for the Puck API related to components. This section details how to interact with and define components within the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/config

LANGUAGE: APIDOC
CODE:
```
Puck API - Components:
  This section details the API for managing and defining components within Puck.
  It covers component registration, configuration, and rendering.
  
  Example:
  registerComponent(componentConfig: ComponentConfig): void
    - Registers a new component with the Puck editor.
    - Parameters:
      - componentConfig: An object containing the configuration for the component.
        - componentConfig.name: string - The unique name of the component.
        - componentConfig.fields: Record<string, Field> - The fields associated with the component.
        - componentConfig.render: React.FC<any> - The React component to render.
    - Returns: void
  
  getComponent(name: string): ComponentConfig | undefined
    - Retrieves the configuration for a registered component.
    - Parameters:
      - name: The name of the component to retrieve.
    - Returns: The component configuration object or undefined if not found.
```

--------------------------------

TITLE: Register Overlay Portal API
DESCRIPTION: Documentation for the `registerOverlayPortal` function, detailing its arguments, options, and return value. This function is used to manage overlay portals within the Puck Editor.

SOURCE: https://puckeditor.com/docs/api-reference/functions/register-overlay-portal

LANGUAGE: APIDOC
CODE:
```
registerOverlayPortal:
  description: A function to clean-up the portal.
  args:
    el: The element to register the portal with.
    opts: Options for the portal.
      disableDrag: Boolean, if true, disables drag functionality.
      disableDragOnFocus: Boolean, if true, disables drag functionality when the element has focus.
  returns:
    A function to clean-up the portal.
```

--------------------------------

TITLE: Puck Compositional Components API
DESCRIPTION: Documentation for Puck's compositional components used within the custom Puck UI.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Compositional Components:

* Puck.Components:
  - Description: A draggable list of components when composing a custom Puck UI.
  - Usage: Displays available components for users to add to their layout.

* Puck.Fields:
  - Description: The fields for the currently selected item when composing a custom Puck UI.
  - Usage: Allows users to edit the properties of selected components.

* Puck.Outline:
  - Description: An interactive outline when composing a custom Puck UI.
  - Usage: Provides a hierarchical view and navigation of the component structure.

* Puck.Preview:
  - Description: A drag-and-drop preview when composing a custom Puck UI.
  - Usage: Offers a visual representation and allows reordering of components.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/puck-api

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/radio

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/root-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: walkTree Function API Documentation
DESCRIPTION: Details the arguments, options, and return values for the walkTree function. It accepts an array of ComponentData and an options object, and returns updated ComponentData.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: APIDOC
CODE:
```
walkTree(content: ComponentData[], options?: { parentId?: string; propName?: string }): ComponentData[] | Data

Arguments:
  content: ComponentData[] - An array of ComponentData, containing all the nodes for this slot.
  options: object - An object containing additional options.
    options.parentId: string - The id of the parent component that defines this slot.
    options.propName: string - The name of the slot field.

Returns:
  ComponentData[] | Data - Optionally return an updated array of ComponentData objects or a new Data object populated with any values returned by the callbackFn.
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/textarea

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck Editor Extension: Theming
DESCRIPTION: Instructions on customizing the visual theme of the Puck editor.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Extending Puck: Theming:

This guide covers customizing the theme of the Puck editor.
```

--------------------------------

TITLE: Integrating Puck - Categories
DESCRIPTION: Information on organizing Puck components into categories for better management and usability.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Categories:
  - Grouping components within Puck for easier navigation and selection.
  - Improves the user experience for content creators.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by Puck for building and managing content. It covers components like ActionBar, AutoField, Drawer, DropZone, FieldLabel, Puck, Render, and their sub-components.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Puck Components:

<ActionBar>
  - Provides a customizable action bar for UI elements.
  <ActionBar.Action>
    - Represents an individual action within the ActionBar.
  <ActionBar.Group>
    - Groups related actions within the ActionBar.
  <ActionBar.Label>
    - Displays a label within the ActionBar.

<AutoField>
  - Automatically generates a form field based on data type.

<Drawer>
  - A component for creating slide-out panels or drawers.
  <Drawer.Item>
    - An item within the Drawer.

<DropZone>
  - Enables drag-and-drop functionality for content placement.

<FieldLabel>
  - Displays a label for a form field.

<Puck>
  - The main Puck editor component.
  <Puck.Components>
    - Access to available Puck components.
  <Puck.Fields>
    - Access to available Puck fields.
  <Puck.Outline>
    - Renders an outline view of the content structure.
  <Puck.Preview>
    - Displays a preview of the content.

<Render>
  - A component for rendering content within Puck.
```

--------------------------------

TITLE: Extending Puck - Composition
DESCRIPTION: Details on composing custom components and functionality within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Composition:
  - Building complex features by combining smaller, reusable parts.
  - A core principle for extending Puck's capabilities.
```

--------------------------------

TITLE: Puck Editor App State: ui.viewports.options
DESCRIPTION: The `ui.viewports.options` property within the Puck Editor's application state represents the available viewport configurations. These options are dynamically provided through the `viewports` API, allowing for flexible definition of different screen sizes and device simulations.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
ui.viewports.options:
  description: The available viewport options, as provided via the `viewports` API.
  type: Array of viewport configuration objects
  example:
    [
      { "name": "Desktop", "width": 1024, "height": 768 },
      { "name": "Tablet", "width": 768, "height": 1024 },
      { "name": "Mobile", "width": 375, "height": 667 }
    ]
```

--------------------------------

TITLE: Integrating Puck - Categories
DESCRIPTION: Information on organizing Puck components into categories for better management and usability.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Categories:
  - Grouping components within Puck for easier navigation and selection.
  - Improves the user experience for content creators.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/dynamic-fields

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Migrate Dynamic Zones with migrateDynamicZonesForComponent
DESCRIPTION: Demonstrates how to migrate DropZone data with dynamic zone names using the `migrateDynamicZonesForComponent` option within the `migrate()` helper function.

SOURCE: https://puckeditor.com/docs/guides/migrations/dropzones-to-slots

LANGUAGE: javascript
CODE:
```
const newData = migrate(legacyData, config, {
  migrateDynamicZonesForComponent: {
    Columns: (props, zones) => {
      return {
        ...props,
        columns: Object.values(zones).map((zone) => ({
          column: zone,
        })),
      };
    },
  },
});
```

--------------------------------

TITLE: Extending Puck - Composition
DESCRIPTION: Details on composing custom components and functionality within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Composition:
  - Building complex features by combining smaller, reusable parts.
  - A core principle for extending Puck's capabilities.
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by Puck for building and managing content. It covers components like ActionBar, AutoField, Drawer, DropZone, FieldLabel, Puck, Render, and their sub-components.

SOURCE: https://puckeditor.com/docs/api-reference/components

LANGUAGE: APIDOC
CODE:
```
Puck Components:

<ActionBar>
  - Provides a customizable action bar for UI elements.
  <ActionBar.Action>
    - Represents an individual action within the ActionBar.
  <ActionBar.Group>
    - Groups related actions within the ActionBar.
  <ActionBar.Label>
    - Displays a label within the ActionBar.

<AutoField>
  - Automatically generates a form field based on data type.

<Drawer>
  - A component for creating slide-out panels or drawers.
  <Drawer.Item>
    - An item within the Drawer.

<DropZone>
  - Enables drag-and-drop functionality for content placement.

<FieldLabel>
  - Displays a label for a form field.

<Puck>
  - The main Puck editor component.
  <Puck.Components>
    - Access to available Puck components.
  <Puck.Fields>
    - Access to available Puck fields.
  <Puck.Outline>
    - Renders an outline view of the content structure.
  <Puck.Preview>
    - Displays a preview of the content.

<Render>
  - A component for rendering content within Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Theming
DESCRIPTION: This section details the API reference for theming in Puck Editor. Theming allows customization of the editor's visual appearance.

SOURCE: https://puckeditor.com/docs/api-reference/configuration

LANGUAGE: APIDOC
CODE:
```
API Reference - Theming:
  Theming
    - Description: API for customizing the visual theme of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/index

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/select

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck API Reference - Permissions
DESCRIPTION: Provides an overview of the Permissions API in Puck, detailing how it's used for feature toggling. It links to supported permissions and explains global, component-specific, and dynamic permission management.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:
  Configuration:
    - permissions: Global permissions object.
    - components.<ComponentName>.permissions: Component-specific permissions object.
    - components.<ComponentName>.resolvePermissions: Function to dynamically resolve permissions based on data.

Permissions API:
  Purpose: Enables feature toggling (e.g., delete, drag, edit).
  Supported Permissions:
    - delete: Controls deletion functionality.
    - drag: Controls drag-and-drop functionality.
    - duplication: Controls duplication functionality.
    - editing: Controls editing capabilities (e.g., setting fields to read-only).
    - (See https://puckeditor.com/docs/api-reference/permissions#supported-permissions for a complete list)

Usage:
  Global Toggling:
    Set the `permissions` prop on the `<Puck />` component.
    Example:
      <Puck permissions={{ delete: false }} />

  Component-Specific Toggling:
    Set the `permissions` parameter within the component's configuration.
    Example:
      const config = {
        components: {
          MyComponent: {
            permissions: { delete: false },
          },
        },
      };

  Dynamic Toggling:
    Use the `resolvePermissions` parameter in component configuration.
    Signature: resolvePermissions(data, params)
      - data: The component's data.
      - params: An object containing `permissions` (inherited permissions) and `changed` (props that have changed).
    Example:
      resolvePermissions: (data, { permissions }) => {
        if (data.props.locked) {
          return { delete: false };
        }
        return permissions;
      }

  Asynchronous Resolution:
    The `resolvePermissions` function can be asynchronous.
    Example:
      resolvePermissions: async (data) => {
        const serverPermissions = await fetchPermissions(data.id);
        return serverPermissions;
      }

  Preventing Duplicate Calls:
    Utilize the `changed` parameter within `resolvePermissions` to conditionally execute operations.
    Example:
      resolvePermissions: async (data, { changed, lastPermissions }) => {
        if (!changed.someProp) return lastPermissions;
        return await performExpensiveOperation();
      }
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section details the API reference for Puck, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, PuckApi, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/drawer

LANGUAGE: APIDOC
CODE:
```
Puck Editor API Reference:

Components:
  - Reference for Puck components.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for Puck configuration options.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Data Model:
  - Information about the data model used by Puck.

Fields:
  - Reference for Puck fields.
  - Link: https://puckeditor.com/docs/api-reference/fields

Functions:
  - Details on available functions within Puck.

Overrides:
  - Documentation for overriding Puck's UI elements.
  - actionBar: https://puckeditor.com/docs/api-reference/overrides/action-bar
  - componentItem: https://puckeditor.com/docs/api-reference/overrides/component-item
  - components: https://puckeditor.com/docs/api-reference/overrides/components
  - fieldLabel: https://puckeditor.com/docs/api-reference/overrides/field-label
  - fieldTypes: https://puckeditor.com/docs/api-reference/overrides/field-types
  - fields: https://puckeditor.com/docs/api-reference/overrides/fields
  - headerActions: https://puckeditor.com/docs/api-reference/overrides/header-actions
  - header: https://puckeditor.com/docs/api-reference/overrides/header
  - iframe: https://puckeditor.com/docs/api-reference/overrides/iframe
  - outline: https://puckeditor.com/docs/api-reference/overrides/outline
  - preview: https://puckeditor.com/docs/api-reference/overrides/preview
  - puck: https://puckeditor.com/docs/api-reference/overrides/puck
  - componentOverlay: https://puckeditor.com/docs/api-reference/overrides/component-overlay
  - drawer: https://puckeditor.com/docs/api-reference/overrides/drawer
  - drawerItem: https://puckeditor.com/docs/api-reference/overrides/drawer-item

Actions:
  - Reference for actions available in Puck.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Documentation for field transforms.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Information on permissions management.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Details on the Plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for the PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Information on theming Puck.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck.Components Props Reference
DESCRIPTION: API documentation detailing the properties accepted by the `<Puck.Components>` component.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-components

LANGUAGE: APIDOC
CODE:
```
<Puck.Components>
  Props:
    - No props accepted.
```

--------------------------------

TITLE: Puck Editor Integration: Multi-column Layouts
DESCRIPTION: Instructions on implementing multi-column layouts within Puck, allowing for more complex page structures.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Multi-column Layouts:

This guide explains how to create and manage multi-column layouts using Puck.
```

--------------------------------

TITLE: Providing Data to Puck Render Component
DESCRIPTION: This snippet demonstrates the structure of the `data` prop required by the `Render` component. It shows how to define content blocks, their types, and associated props, which are then rendered by components specified in the `config`.

SOURCE: https://puckeditor.com/docs/api-reference/components/render

LANGUAGE: jsx
CODE:
```
export function Example() {
  return (
    <Render
      data={{
        content: [
          {
            props: { children: "Hello, world", id: "id" },
            type: "HeadingBlock",
          },
        ],
        root: {},
      }}
      // ...
    />
  );
}
```

--------------------------------

TITLE: Puck API Reference Functions
DESCRIPTION: This section details various functions available in the Puck API for manipulating data, resolving components, and managing editor state. It includes functions for data migration, resolving all data, setting nested properties, transforming props, and accessing Puck's context.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: APIDOC
CODE:
```
Puck API Functions:

migrate(data: any, schemaVersion: number): any
  - Migrates data to a new schema version.
  - Parameters:
    - data: The data to migrate.
    - schemaVersion: The target schema version.
  - Returns: The migrated data.

registerOverlayPortal(portal: React.ReactNode): void
  - Registers an overlay portal to be rendered.
  - Parameters:
    - portal: The React node to render as an overlay.

resolveAllData(data: any): any
  - Resolves all data within the Puck editor.
  - Parameters:
    - data: The data to resolve.
  - Returns: The resolved data.

setDeep(obj: any, path: string, value: any): any
  - Sets a value at a deep path within an object.
  - Parameters:
    - obj: The object to modify.
    - path: The path to the property (e.g., 'a.b.c').
    - value: The value to set.
  - Returns: The modified object.

transformProps(props: any, transform: (props: any) => any): any
  - Transforms props of a component.
  - Parameters:
    - props: The props to transform.
    - transform: A function that takes props and returns transformed props.
  - Returns: The transformed props.

useGetPuck(): any
  - Hook to get the Puck instance.
  - Returns: The Puck instance.

usePuck(): any
  - Hook to access Puck context.
  - Returns: Puck context.

walkTree(data: any, callback: (data: any) => void): void
  - Traverses the Puck data tree and applies a callback to each node.
  - Parameters:
    - data: The data tree to traverse.
    - callback: A function to execute for each node.
```

--------------------------------

TITLE: Integrating Puck - External Data Sources
DESCRIPTION: Information on integrating Puck with external data sources to populate content or fields.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
External Data Sources:
  - Connecting Puck to external APIs or databases.
  - Enables fetching and displaying data from various sources.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/categories

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck AppState API Documentation
DESCRIPTION: Documentation for the AppState within the Puck Editor, detailing its structure and the various UI-related properties it manages. This includes information on data, UI state, and specific UI elements like the component list and field focus.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/app-state

LANGUAGE: APIDOC
CODE:
```
AppState:
  description: The internal state of the Puck component. Note: This API is unstable and may change.
  properties:
    data:
      description: The current Data payload managed by Puck.
      type: Data
    ui:
      description: The current state of the Puck editor interface.
      type: Object
      properties:
        arrayState:
          description: An object describing the internal state of array items.
          type: Object
        componentList:
          description: An object describing the component drawer, similar to the categories API.
          type: Object
          properties:
            key:
              description: Represents a category in the component drawer.
              type: Object
              properties:
                components:
                  description: Array containing the names of components in this category.
                  type: Array<String>
                title:
                  description: Title of the category.
                  type: String
                visible:
                  description: Whether or not the category is visible in the side bar.
                  type: Boolean
                expanded:
                  description: Whether or not the category is expanded in the side bar.
                  type: Boolean
        field.focus:
          description: The name of the currently focused field.
          type: String
        isDragging:
          description: Indicates if an item is currently being dragged.
          type: Boolean
        itemSelector:
          description: Information about the currently selected item for manipulation.
          type: ItemSelector
          properties:
            index:
              type: Number
            zone:
              type: String
        leftSideBarVisible:
          description: Controls the visibility of the left sidebar.
          type: Boolean
        leftSideBarWidth:
          description: Sets the width of the left sidebar.
          type: Number
        previewMode:
          description: The current mode of the editor preview.
          type: String
          example: "edit"
        rightSideBarVisible:
          description: Controls the visibility of the right sidebar.
          type: Boolean
        rightSideBarWidth:
          description: Sets the width of the right sidebar.
          type: Number
        viewports:
          description: Configuration for editor viewports.
          type: Object
          properties:
            controlsVisible:
              type: Boolean
            current:
              type: Object
            options:
              type: Array
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/base

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: walkTree API Documentation
DESCRIPTION: Documentation for the walkTree function, detailing its parameters, their types, and usage. It explains how to traverse and modify Puck data structures.

SOURCE: https://puckeditor.com/docs/api-reference/functions/walk-tree

LANGUAGE: APIDOC
CODE:
```
walkTree
Recursively walk the entire tree for the [Data](https://puckeditor.com/docs/api-reference/data-model/data) or a single [ComponentData](https://puckeditor.com/docs/api-reference/data-model/component-data) node, using a depth-first approach where the deepest [slots](https://puckeditor.com/docs/api-reference/fields/slots) are processed first.
Receives a callback function that is called once for each slot. You can optionally return a value to update the slot.

## Args
Param | Example | Type  
---|---|---  
[`data`](https://puckeditor.com/docs/api-reference/functions/walk-tree#data) | `{ root: {}, content: [] }` |  [Data](https://puckeditor.com/docs/api-reference/data-model/data) | [ComponentData](https://puckeditor.com/docs/api-reference/data-model/component-data)  
[`config`](https://puckeditor.com/docs/api-reference/functions/walk-tree#config) | `{ components: {} }` | [Config](https://puckeditor.com/docs/api-reference/configuration/config)  
[`callbackFn()`](https://puckeditor.com/docs/api-reference/functions/walk-tree#callbackfncontent-options) | `(content) => content.slice(0, 1)` | Function  

###  `data`
The [`Data`](https://puckeditor.com/docs/api-reference/data-model/data) or [`ComponentData`](https://puckeditor.com/docs/api-reference/data-model/component-data) to traverse.

###  `config`
A Puck [config](https://puckeditor.com/docs/api-reference/configuration/config) object, used to determine which components contain slots.

###  `callbackFn(content, options)`
A callback function called for each slot. Receives an array of [`ComponentData`](https://puckeditor.com/docs/api-reference/data-model/component-data). Optionally returns an updated array of [`ComponentData`](https://puckeditor.com/docs/api-reference/data-model/component-data) to update the content for this slot.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/field-transforms

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck API Reference - Components
DESCRIPTION: This section details the various React components provided by the Puck library for building and managing content. It includes components for action bars, drawers, drop zones, fields, and the core Puck editor itself.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-outline

LANGUAGE: APIDOC
CODE:
```
ActionBar:
  A component for displaying actions in the Puck editor.

ActionBar.Action:
  Represents a single action within an ActionBar.

ActionBar.Group:
  Groups multiple ActionBar.Action components.

ActionBar.Label:
  Displays a label within an ActionBar.

AutoField:
  Automatically generates a form field based on data type.

Drawer:
  A component for creating side panels or drawers.

Drawer.Item:
  An individual item within a Drawer.

DropZone:
  A component that allows users to drop elements into a designated area.

FieldLabel:
  A label for a form field.

Puck:
  The main Puck editor component.

Puck.Components:
  Provides access to registered Puck components.

Puck.Fields:
  Provides access to registered Puck fields.

Puck.Outline:
  Renders an outline view of the Puck content.

Puck.Preview:
  Renders a preview of the Puck content.

Render:
  A component for rendering Puck content.
```

--------------------------------

TITLE: Puck Editor API Reference - Actions
DESCRIPTION: Documentation for the Puck Editor API, focusing on 'Actions'. This section likely details the available actions that can be performed within Puck.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Actions
  - Description of the available actions within the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/actions
```

--------------------------------

TITLE: Puck API Reference - Actions
DESCRIPTION: Documentation for the Puck API related to actions. This covers predefined actions that can be triggered within the editor.

SOURCE: https://puckeditor.com/docs/api-reference/configuration/component-config

LANGUAGE: APIDOC
CODE:
```
Puck API - Actions:
  This section details the API for predefined actions within the Puck editor.

  Available Actions:
    - Actions can be triggered by user interactions or programmatically.
    - Examples might include `save`, `publish`, `undo`, `redo`.

  Example Usage:
    // Triggering a save action:
    puckApi.executeAction('save');
```

--------------------------------

TITLE: Puck Editor Integration: Overlay Portals
DESCRIPTION: Details on using overlay portals for rendering UI elements outside the main component tree in Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Overlay Portals:

This guide explains the use of overlay portals in Puck for rendering UI elements.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section outlines the various API endpoints and functionalities available within Puck for managing components, configurations, fields, and more. It details the structure and usage of different API modules.

SOURCE: https://puckeditor.com/docs/extending-puck/plugins

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Documentation for configuration-related API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Data Model:
  - Information about the data model used by Puck.

Fields:
  - Documentation for field-related API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/fields

Functions:
  - Details on available functions within the Puck API.

Overrides:
  - Documentation for overriding default Puck behaviors.
  - Link: https://puckeditor.com/docs/api-reference/overrides

Actions:
  - Documentation for action-related API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Documentation for field transform API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Documentation for permission-related API endpoints.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Documentation for the Plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Documentation for the core Puck API.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Documentation for theming capabilities.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck API Reference - Functions
DESCRIPTION: This section details various functions available in the Puck API for manipulating data, resolving components, and managing editor state. It includes functions for data migration, resolving all data, setting nested properties, transforming props, and accessing Puck's context.

SOURCE: https://puckeditor.com/docs/api-reference/functions/migrate

LANGUAGE: APIDOC
CODE:
```
Puck API Functions:

migrate(data: any, schemaVersion: number): any
  - Migrates data to a new schema version.
  - Parameters:
    - data: The data to migrate.
    - schemaVersion: The target schema version.
  - Returns: The migrated data.

registerOverlayPortal(portal: React.ReactNode): void
  - Registers an overlay portal to be rendered.
  - Parameters:
    - portal: The React node to render as a portal.

resolveAllData(data: any): any
  - Resolves all data within the Puck editor.
  - Parameters:
    - data: The data to resolve.
  - Returns: The resolved data.

setDeep(data: any, path: string[], value: any): any
  - Sets a value at a deep path within the data.
  - Parameters:
    - data: The data object.
    - path: An array of strings representing the path to the value.
    - value: The new value to set.
  - Returns: The modified data object.

transformProps(props: any, transform: (props: any) => any): any
  - Transforms props using a provided function.
  - Parameters:
    - props: The props to transform.
    - transform: A function that takes props and returns transformed props.
  - Returns: The transformed props.

useGetPuck(): any
  - Hook to get the Puck instance.
  - Returns: The Puck instance.

usePuck(): any
  - Hook to access Puck's context.
  - Returns: Puck's context.

walkTree(data: any, callback: (data: any) => void): void
  - Traverses the data tree and executes a callback for each node.
  - Parameters:
    - data: The data tree to traverse.
    - callback: A function to execute for each node.
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/data

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: Puck Editor Configuration API Reference
DESCRIPTION: This section outlines the configuration options available for customizing the Puck editor. It covers aspects like component registration, field definitions, and overall editor behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Puck Configuration API:

This section covers the API related to configuring the Puck editor, including component and field definitions, data models, and overrides.
```

--------------------------------

TITLE: Puck Editor Integration: Multi-column Layouts
DESCRIPTION: Instructions on implementing multi-column layouts within Puck, allowing for more complex page structures.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-group

LANGUAGE: APIDOC
CODE:
```
Integrating Puck: Multi-column Layouts:

This guide explains how to create and manage multi-column layouts using Puck.
```

--------------------------------

TITLE: Puck API Reference - Core Functionality
DESCRIPTION: This section provides an overview of core Puck API functionalities, including components, configuration, fields, actions, and field transforms.

SOURCE: https://puckeditor.com/docs/api-reference/overrides

LANGUAGE: APIDOC
CODE:
```
Puck Core API:

Components:
  description: API for managing and rendering components within Puck.

Configuration:
  description: API for configuring Puck's behavior and settings.

Fields:
  description: API related to defining and managing data fields.

Functions:
  description: Utility functions available within the Puck API.

Overrides:
  description: API for customizing the Puck editor's UI and functionality.

Actions:
  description: API for defining and handling actions within Puck.

FieldTransforms:
  description: API for transforming field data.

Permissions:
  description: API for managing user permissions.

Plugin:
  description: API for developing and integrating plugins.

PuckApi:
  description: The main Puck API object, providing access to core functionalities.

Theming:
  description: API for customizing the visual theme of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/app-state

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/component-data

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: Puck Editor Theming API Reference
DESCRIPTION: Information on customizing the visual appearance of the Puck editor through theming options.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Puck Theming API:

This section covers the API for theming the Puck editor's user interface.
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/text

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck Editor Configuration API Reference
DESCRIPTION: This section outlines the configuration options available for customizing the Puck editor. It covers aspects like component registration, field definitions, and overall editor behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Puck Configuration API:

This section covers the API related to configuring the Puck editor, including component and field definitions, data models, and overrides.
```

--------------------------------

TITLE: Puck API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, the Puck API itself, and theming.

SOURCE: https://puckeditor.com/docs/extending-puck/internal-puck-api

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Documentation for component-related APIs.

Configuration:
  - Documentation for configuration options.

Fields:
  - Documentation for field APIs.

Overrides:
  - Documentation for UI override APIs.

Actions:
  - Documentation for action APIs.

FieldTransforms:
  - Documentation for field transform APIs.

Permissions:
  - Documentation for permission APIs.

Plugin:
  - Documentation for the plugin API.

PuckApi:
  - Documentation for the core Puck API.

Theming:
  - Documentation for theming capabilities.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section details the API reference for Puck, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, PuckApi, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/header-actions

LANGUAGE: APIDOC
CODE:
```
Puck Editor API Reference:

Components:
  - Reference for Puck components.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for Puck configuration options.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Data Model:
  - Information about the data model used by Puck.

Fields:
  - Reference for Puck fields.
  - Link: https://puckeditor.com/docs/api-reference/fields

Functions:
  - Details on available functions within Puck.

Overrides:
  - Documentation for overriding Puck's UI elements.
  - actionBar: https://puckeditor.com/docs/api-reference/overrides/action-bar
  - componentItem: https://puckeditor.com/docs/api-reference/overrides/component-item
  - components: https://puckeditor.com/docs/api-reference/overrides/components
  - fieldLabel: https://puckeditor.com/docs/api-reference/overrides/field-label
  - fieldTypes: https://puckeditor.com/docs/api-reference/overrides/field-types
  - fields: https://puckeditor.com/docs/api-reference/overrides/fields
  - headerActions: https://puckeditor.com/docs/api-reference/overrides/header-actions
  - header: https://puckeditor.com/docs/api-reference/overrides/header
  - iframe: https://puckeditor.com/docs/api-reference/overrides/iframe
  - outline: https://puckeditor.com/docs/api-reference/overrides/outline
  - preview: https://puckeditor.com/docs/api-reference/overrides/preview
  - puck: https://puckeditor.com/docs/api-reference/overrides/puck
  - componentOverlay: https://puckeditor.com/docs/api-reference/overrides/component-overlay
  - drawer: https://puckeditor.com/docs/api-reference/overrides/drawer
  - drawerItem: https://puckeditor.com/docs/api-reference/overrides/drawer-item

Actions:
  - Reference for actions available in Puck.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Documentation for field transforms.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Information on permissions management.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Details on the Plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for the PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Information on theming Puck.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/extending-puck/ui-overrides

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Extending Puck - Plugin API
DESCRIPTION: Details on the Plugin API for developing and integrating custom plugins into Puck.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Plugin API:
  - The interface for creating extensions (plugins) for Puck.
  - Enables adding new features and integrating with other tools.
```

--------------------------------

TITLE: Puck API Reference - Configuration
DESCRIPTION: Documentation for configuring Puck, covering aspects like component settings, root configurations, and layout management.

SOURCE: https://puckeditor.com/docs/api-reference/components/auto-field

LANGUAGE: APIDOC
CODE:
```
Component Configuration:
  Details on how to configure individual components within Puck.

Root Configuration:
  Configuration for the root of the Puck editor instance.

Multi-column Layouts:
  Guidelines for creating multi-column layouts using Puck.

Categories:
  How to categorize components and fields in Puck.

Dynamic Props:
  Managing dynamic properties for components.

Dynamic Fields:
  Creating and using dynamic fields in Puck.

External Data Sources:
  Integrating external data sources with Puck.

React Server Components:
  Using Puck with React Server Components.

Data Migration:
  Strategies for migrating data within Puck.

Viewports:
  Configuring and managing viewports in Puck.

Feature Toggling:
  Implementing feature toggles within Puck.

Overlay Portals:
  Using overlay portals for UI elements.
```

--------------------------------

TITLE: Puck Drawer Component Usage
DESCRIPTION: Demonstrates how to use the `<Drawer>` component from Puck Editor to create a list of items that can be dragged into a `<Puck.Preview>`. This is useful for composing custom Puck UIs.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer

LANGUAGE: javascript
CODE:
```
import { Puck, Drawer } from "@measured/puck";

export function Editor() {
  return (
    <Puck>
      <Drawer>
        <Drawer.Item name="Orange" />
      </Drawer>
    </Puck>
  );
}
```

--------------------------------

TITLE: Puck API Reference - Theming
DESCRIPTION: This section covers the theming capabilities of the Puck editor, explaining how to customize the visual appearance and styling of the editor and its components.

SOURCE: https://puckeditor.com/docs/api-reference/components/puck-fields

LANGUAGE: APIDOC
CODE:
```
Theming:
  - Allows customization of the visual theme and styling of the Puck editor.
```

--------------------------------

TITLE: Handling Client-Specific Code in Puck Configurations for RSC
DESCRIPTION: Strategies for managing Puck configurations when integrating with React Server Components (RSC). This includes avoiding client-specific code, using the 'use client;' directive, or creating separate configurations for client and server rendering.

SOURCE: https://puckeditor.com/docs/integrating-puck/server-components

LANGUAGE: APIDOC
CODE:
```
Approach 1: Avoid client-specific code
  Description: Simplest method for RSC support. Avoids React hooks like useState or useContext.
  Note: Legacy <DropZone> may cause issues; consider migrating to the 'slot' field or refer to previous guides.

Approach 2: Use 'use client;' directive
  Description: Marks components with client-specific functionality for RSC compatibility.

Approach 3: Separate client and server configs
  Description: Creates distinct Puck configurations tailored for client and server rendering environments.
```

--------------------------------

TITLE: Puck Editor Plugin API Reference
DESCRIPTION: Documentation for the Plugin API, enabling the extension of Puck's functionality through custom plugins.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar

LANGUAGE: APIDOC
CODE:
```
Puck Plugin API:

This section details the Plugin API for extending Puck's functionality.
```

--------------------------------

TITLE: Puck Editor API Reference - Data Model
DESCRIPTION: Documentation for the Puck Editor API, detailing the 'Data Model'. This includes AppState, ComponentData, Data, ItemSelector, and RootData.

SOURCE: https://puckeditor.com/docs/api-reference/data-model/item-selector

LANGUAGE: APIDOC
CODE:
```
API Reference: Data Model
  - AppState: Represents the overall state of the Puck application.
  - ComponentData: Defines the data structure for individual components.
  - Data: General data structure used within Puck.
  - ItemSelector: Utility for selecting items within the data model.
  - RootData: Represents the root data structure of the Puck editor.
  - Links to specific documentation: https://puckeditor.com/docs/api-reference/data-model/app-state, https://puckeditor.com/docs/api-reference/data-model/component-data, https://puckeditor.com/docs/api-reference/data-model/data, https://puckeditor.com/docs/api-reference/data-model/item-selector, https://puckeditor.com/docs/api-reference/data-model/root-data
```

--------------------------------

TITLE: Puck Editor API Reference: Data, migrate, and transformProps
DESCRIPTION: This section provides API references for key functionalities in Puck Editor related to data management and migration. It includes details on the Data API, the migrate function, and the transformProps function.

SOURCE: https://puckeditor.com/docs/integrating-puck/data-migration

LANGUAGE: APIDOC
CODE:
```
Data API Reference:
  Provides methods for interacting with the data model in Puck Editor.
  Details on specific data operations can be found at: https://puckeditor.com/docs/api-reference/data-model/data

migrate API Reference:
  Function for performing data migrations within Puck Editor.
  Details on usage and parameters can be found at: https://puckeditor.com/docs/api-reference/functions/migrate

transformProps API Reference:
  Function for transforming properties in Puck Editor.
  Details on usage and parameters can be found at: https://puckeditor.com/docs/api-reference/functions/transform-props
```

--------------------------------

TITLE: Puck Editor API Reference - Permissions
DESCRIPTION: This section details the Permissions API reference for Puck Editor, including supported permissions and how to use the `permissions` prop in components.

SOURCE: https://puckeditor.com/docs/integrating-puck/feature-toggling

LANGUAGE: APIDOC
CODE:
```
Permissions API Reference:
  - /docs/api-reference/permissions

Supported Permissions:
  - /docs/api-reference/permissions#supported-permissions

Global `permissions` prop API reference:
  - /docs/api-reference/components/puck#permissions

Component `permissions` param API reference:
  - /docs/api-reference/configuration/component-config#permissions

Component `resolvePermissions` param API reference:
  - /docs/api-reference/configuration/component-config#resolvepermissionsdata-params
```

--------------------------------

TITLE: Extending Puck - Internal Puck API
DESCRIPTION: Reference for the internal Puck API, providing access to core editor functionalities for advanced customization.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-action

LANGUAGE: APIDOC
CODE:
```
Internal Puck API:
  - Access to Puck's internal methods and state for deep customization.
  - Use with caution as internal APIs may change between versions.
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/array

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section details the API reference for Puck, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, PuckApi, and theming.

SOURCE: https://puckeditor.com/docs/api-reference/overrides/components

LANGUAGE: APIDOC
CODE:
```
Puck Editor API Reference:

Components:
  - Reference for Puck components.
  - Link: https://puckeditor.com/docs/api-reference/components

Configuration:
  - Reference for Puck configuration options.
  - Link: https://puckeditor.com/docs/api-reference/configuration

Data Model:
  - Information about the data model used by Puck.

Fields:
  - Reference for Puck fields.
  - Link: https://puckeditor.com/docs/api-reference/fields

Functions:
  - Details on available functions within Puck.

Overrides:
  - Documentation for overriding Puck's UI elements.
  - actionBar: https://puckeditor.com/docs/api-reference/overrides/action-bar
  - componentItem: https://puckeditor.com/docs/api-reference/overrides/component-item
  - components: https://puckeditor.com/docs/api-reference/overrides/components
  - fieldLabel: https://puckeditor.com/docs/api-reference/overrides/field-label
  - fieldTypes: https://puckeditor.com/docs/api-reference/overrides/field-types
  - fields: https://puckeditor.com/docs/api-reference/overrides/fields
  - headerActions: https://puckeditor.com/docs/api-reference/overrides/header-actions
  - header: https://puckeditor.com/docs/api-reference/overrides/header
  - iframe: https://puckeditor.com/docs/api-reference/overrides/iframe
  - outline: https://puckeditor.com/docs/api-reference/overrides/outline
  - preview: https://puckeditor.com/docs/api-reference/overrides/preview
  - puck: https://puckeditor.com/docs/api-reference/overrides/puck
  - componentOverlay: https://puckeditor.com/docs/api-reference/overrides/component-overlay
  - drawer: https://puckeditor.com/docs/api-reference/overrides/drawer
  - drawerItem: https://puckeditor.com/docs/api-reference/overrides/drawer-item

Actions:
  - Reference for actions available in Puck.
  - Link: https://puckeditor.com/docs/api-reference/actions

FieldTransforms:
  - Documentation for field transforms.
  - Link: https://puckeditor.com/docs/api-reference/field-transforms

Permissions:
  - Information on permissions management.
  - Link: https://puckeditor.com/docs/api-reference/permissions

Plugin:
  - Details on the Plugin API.
  - Link: https://puckeditor.com/docs/api-reference/plugin

PuckApi:
  - Reference for the PuckApi.
  - Link: https://puckeditor.com/docs/api-reference/puck-api

Theming:
  - Information on theming Puck.
  - Link: https://puckeditor.com/docs/api-reference/theming
```

--------------------------------

TITLE: Puck API Reference - Core Concepts
DESCRIPTION: This section outlines key API references for Puck, including Components, Configuration, Overrides, Actions, FieldTransforms, Permissions, Plugin, PuckApi, and Theming. It provides an overview of how to interact with and extend Puck's core functionalities.

SOURCE: https://puckeditor.com/docs/api-reference/fields/object

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Description: Reference for defining and managing components within Puck.

Configuration:
  - Description: Details on configuring Puck's behavior and settings.

Overrides:
  - Description: Information on how to override default Puck behaviors or UI elements.

Actions:
  - Description: Documentation for available actions that can be triggered within Puck.

FieldTransforms:
  - Description: Explains how to transform field data.

Permissions:
  - Description: Covers the permission system within Puck.

Plugin:
  - Description: API for creating and managing Puck plugins.

PuckApi:
  - Description: The main Puck API object for interacting with the editor.

Theming:
  - Description: Information on customizing the appearance of Puck.
```

--------------------------------

TITLE: Puck Editor API Reference
DESCRIPTION: This section provides a comprehensive reference for the Puck Editor's API, covering components, configuration, fields, overrides, actions, field transforms, permissions, plugins, theming, and the main Puck API. It details the structure and usage of various API elements for extending and customizing Puck.

SOURCE: https://puckeditor.com/docs/integrating-puck/external-data-sources

LANGUAGE: APIDOC
CODE:
```
Puck API Reference:

Components:
  - Reference for Puck components and their properties.
  - Used for defining the structure and behavior of editable elements.

Configuration:
  - Details on how to configure Puck's root settings and component-specific options.
  - Covers aspects like layout, data fetching, and editor behavior.

Fields:
  - Documentation for available field types (e.g., text, number, image).
  - Explains how to define and use custom fields for component properties.

Overrides:
  - Information on how to override default Puck UI elements and behaviors.
  - Enables customization of the editor's appearance and functionality.

Actions:
  - Reference for available actions that can be triggered within Puck.
  - Used for implementing custom workflows and interactions.

FieldTransforms:
  - Documentation for transforming field values.
  - Useful for data manipulation and validation before saving.

Permissions:
  - Details on managing user permissions within Puck.
  - Controls access to specific features or content.

Plugin:
  - Information on the Plugin API for extending Puck's capabilities.
  - Allows for the creation of custom plugins to add new features.

PuckApi:
  - Comprehensive reference for the core Puck API object.
  - Provides access to Puck's internal methods and state.

Theming:
  - Documentation on how to theme the Puck editor.
  - Allows customization of the editor's visual appearance.
```

--------------------------------

TITLE: Puck API Reference - Functions
DESCRIPTION: This section details various functions available in the Puck API for manipulating data, resolving components, and managing editor state. It includes functions for data migration, resolving all data, setting nested properties, transforming props, and accessing Puck's context.

SOURCE: https://puckeditor.com/docs/api-reference/functions/use-puck

LANGUAGE: APIDOC
CODE:
```
Puck API Functions:

migrate(data: any, schemaVersion: number): any
  - Migrates data to a new schema version.
  - Parameters:
    - data: The data to migrate.
    - schemaVersion: The target schema version.
  - Returns: The migrated data.

registerOverlayPortal(portal: React.ReactNode): void
  - Registers an overlay portal to be rendered.
  - Parameters:
    - portal: The React node to render as a portal.

resolveAllData(data: any): any
  - Resolves all data within the Puck editor.
  - Parameters:
    - data: The data to resolve.
  - Returns: The resolved data.

setDeep(data: any, path: string[], value: any): any
  - Sets a value at a deep path within the data.
  - Parameters:
    - data: The data object.
    - path: An array of strings representing the path to the value.
    - value: The new value to set.
  - Returns: The modified data object.

transformProps(props: any, transform: (props: any) => any): any
  - Transforms props using a provided function.
  - Parameters:
    - props: The props to transform.
    - transform: A function that takes props and returns transformed props.
  - Returns: The transformed props.

useGetPuck(): any
  - Hook to get the Puck instance.
  - Returns: The Puck instance.

usePuck(): any
  - Hook to access Puck's context.
  - Returns: Puck's context.

walkTree(data: any, callback: (data: any) => void): void
  - Traverses the data tree and executes a callback for each node.
  - Parameters:
    - data: The data tree to traverse.
    - callback: A function to execute for each node.
```

--------------------------------

TITLE: Puck Editor Plugin API Reference
DESCRIPTION: Documentation for the Plugin API, enabling the extension of Puck's functionality through custom plugins.

SOURCE: https://puckeditor.com/docs/api-reference/components/drawer-item

LANGUAGE: APIDOC
CODE:
```
Puck Plugin API:

This section details the Plugin API for extending Puck's functionality.
```

--------------------------------

TITLE: Puck Editor Configuration API Reference
DESCRIPTION: This section outlines the configuration options available for customizing the Puck editor. It covers aspects like component registration, field definitions, and overall editor behavior.

SOURCE: https://puckeditor.com/docs/api-reference/components/action-bar-label

LANGUAGE: APIDOC
CODE:
```
Puck Configuration API:

This section covers the API related to configuring the Puck editor, including component and field definitions, data models, and overrides.
```

--------------------------------

TITLE: Puck Editor API Reference: Inline Component Configuration
DESCRIPTION: Explains the configuration options for 'inline' components in Puck Editor, allowing for components to be rendered directly within the content flow without additional wrappers.

SOURCE: https://puckeditor.com/docs/integrating-puck/multi-column-layouts

LANGUAGE: APIDOC
CODE:
```
Inline Component Configuration:
  - Configures components to render inline.
  - Useful for text-based content or elements that should not have block-level wrappers.
  - Refer to: https://puckeditor.com/docs/api-reference/configuration/component-config#inline
```