import type { Meta, StoryObj } from "@storybook/react";
import DataTablePaginationRow from "../components/DataTablePaginationRow";

const meta: Meta<typeof DataTablePaginationRow> = {
  title: "DataTablePaginationRow",
  component: DataTablePaginationRow,
};

export default meta;

type Story = StoryObj<typeof DataTablePaginationRow>;

export const Base: Story = {
  args: {
    numberOfRows: 10,
    numberOfColumns: 2,
    page: 0,
    rowsPerPage: 5,
    onPageChange: () => {},
    onRowsPerPageChange: () => {},
  },
};
