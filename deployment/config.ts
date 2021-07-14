import { Config } from "@pulumi/pulumi";

const config = new Config();

/// PostgreSQL config
export const dbUserName = config.require("dbUserName");
export const dbPassword = config.require("dbPassword");

// GCP Config
export const cloudLocation = config.require("cloudLocation");
export const cloudRegion = config.require("cloudRegion");
export const cloudProject = config.require('cloudProject')