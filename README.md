# Boxed Assignment - Reusable Table Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Run the project

In the project directory, you can run:
```bash
yarn
```
to install all dependencies, and then run
```bash
yarn start
```
to runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# ReusableTable conmponent props

| Name               | Type     | Default | Description                                                                            |
|--------------------|----------|---------|----------------------------------------------------------------------------------------|
| columns (required) | Array    |         | Configure for columns (no. columns, header label, width, how to render,...).           |
| data               | Array    | []      | Data for table.                                                                        |
| loading            | Boolean  | false   | Show loading indicator.                                                                |
| onSelectRows       | Function |         | Callback when select/unselect a row, return list of selected rows.                     |
| pageSize           | Number   | 10      | Number of rows in each page.                                                           |
| rowId              | String   | "id"    | Primary key for each row.                                                              |
| selectable         | Boolean  | true    | Show checkbox to select rows.                                                          |
| searchable         | Boolean  | true    | Display search input above table header.                                               |
| searchFields       | Array    | []      | List of field to apply search on (available when searchable = true).                   |
| ssr                | Boolean  | false   | Pagination is implement in server-side.                                                |
| ssrQueryFunc       | Function |         | Function to query for data when in server-side pagination (available when ssr = true). |
| useUrlQuery        | Boolean  | false   | Parse filters from URL query and manage state by URL query.                            |