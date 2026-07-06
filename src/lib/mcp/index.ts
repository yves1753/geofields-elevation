import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listDivisions from "./tools/list-divisions";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "geofields-mcp",
  title: "Geofields Tanzania MCP",
  version: "0.1.0",
  instructions:
    "Tools for Geofields Tanzania Limited. Use `get_company_info` for a company overview, `list_divisions` for services and divisions, and `get_contact` for phone, WhatsApp and contact page details.",
  tools: [getCompanyInfo, listDivisions, getContact],
});
