import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listDivisions from "./tools/list-divisions";
import getContact from "./tools/get-contact";
import getProjects from "./tools/get-projects";
import getFleet from "./tools/get-fleet";

export default defineMcp({
  name: "geofields-mcp",
  title: "Geofields Tanzania MCP",
  version: "0.2.0",
  instructions:
    "Tools for Geofields Tanzania Limited, a Dar es Salaam mining services company. Use `get_company_info` for the company overview and NAP, `list_divisions` for services, `get_contact` for phone/WhatsApp/email, `list_projects` for Tanzania project locations, and `get_fleet` for drilling rigs.",
  tools: [getCompanyInfo, listDivisions, getContact, getProjects, getFleet],
});
