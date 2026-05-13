# Portfolio Design Guide

## Purpose
- Convert the Notion table-based project archive into a Behance-style project list portfolio.
- Use only the parts of the reference `DESIGN.md` that help with layout clarity, card hierarchy, spacing consistency, and interaction states.
- Exclude finance-specific branding, trading UI patterns, market tables, and Binance-only visual language.

## Content Source
- Primary source: exported Notion project list (`2019-2023`)
- Current dataset count: 14 projects
- Core fields available:
  - `서비스명`
  - `도메인`
  - `형태`
  - `운영 여부`
  - `프로젝트 기간`
  - `웹사이트`
  - `디자인 첨부(링크 3일간 유효)`
  - `개요`
  - `역할`

## Design Direction
- Portfolio tone should feel editorial, confident, and image-first rather than corporate dashboard-like.
- The structure should borrow the "browseable project wall" feel of Behance.
- Visual emphasis should sit on project thumbnails/cards first, then title, period, and role summary.
- Keep the system clean and modern, but not dark-finance themed.

## What To Reuse From The Reference
- Reuse the idea of a defined design system:
  - consistent spacing scale
  - consistent radius scale
  - consistent typography roles
  - explicit button/link states
- Reuse card/surface separation logic:
  - page background
  - elevated project card
  - subtle hover emphasis
- Reuse simple hierarchy rules:
  - strong section titles
  - compact metadata text
  - clear primary action

## What Not To Reuse From The Reference
- Yellow/black Binance branding
- Trading red/green status language as a primary motif
- Market table layout
- Exchange or transaction-centered CTA structure
- Dense top navigation meant for product platforms

## Site Structure
- One-page portfolio first
- Suggested sections:
  - Intro / identity
  - Featured project list
  - Full project archive
  - Contact / external links

## Main Screen Plan

### 1. Hero
- Purpose: immediately communicate who the portfolio belongs to and what kind of work is included.
- Content:
  - short intro line
  - portfolio title or name
  - one-sentence positioning
  - optional quick facts: years, product types, focus areas
- Tone:
  - minimal copy
  - strong typography
  - enough whitespace to separate the hero from the project grid

### 2. Project List
- This is the primary screen.
- Layout should be card-based and thumbnail-led.
- Desktop:
  - 2 to 3 columns
  - generous gaps
- Mobile:
  - 1 column by default
  - optional 2 columns only if thumbnails stay legible

### 3. Project Detail Access
- Each card should allow one of these behaviors:
  - open external website
  - open design attachment
  - expand inline detail
- Recommended first implementation:
  - keep the main page as a list
  - use a lightweight detail layer or dedicated external links
- Avoid overbuilding a full case-study page unless the data becomes richer.

## Project Card Definition
- Each project card should contain:
  - representative thumbnail or placeholder
  - service name
  - project period
  - domain and business type
  - short summary from `개요`
  - role summary from `역할`
  - status badge
- Priority order:
  1. thumbnail
  2. service name
  3. one-line summary
  4. period / meta
  5. actions

## Card Content Rules
- `서비스명`: primary title
- `프로젝트 기간`: compact meta text
- `도메인` + `형태`: combine into one metadata line
- `운영 여부`: badge or label
- `개요`: trim into 1 to 3 bullets or one compact description
- `역할`: shown as a supporting line
- `웹사이트`: primary external link when available
- `디자인 첨부(링크 3일간 유효)`: secondary action when available

## Filtering And Sorting
- Recommended lightweight filters:
  - domain: `App`, `Responsive Web`
  - type: `B2B`, `B2C`, `C2C`
  - status: `운영 중`, `운영 중단`, `비공개`
- Recommended default sort:
  - latest project period first
- Optional highlight rule:
  - featured projects can be pinned manually later

## Functional Requirements
- Project cards must be scannable without opening details.
- External links should be clearly separated by type:
  - `Website`
  - `Design`
- Missing data handling:
  - if no design attachment exists, hide that action
  - if no website exists, keep the card informational only
  - if no thumbnail exists, use a neutral placeholder block
- Long descriptions should be visually clamped.

## Visual Rules
- Favor a light background with darker text for readability.
- Use a restrained accent color for links, badges, and active states.
- Project cards should feel editorial and spacious, not app-dashboard dense.
- Rounded corners and shadows should be subtle.
- Hover effects should be limited to:
  - slight image scale
  - elevation increase
  - link emphasis

## Typography Rules
- Use distinct roles:
  - hero display
  - section title
  - card title
  - metadata
  - body text
- Project titles should be stronger than metadata but not oversized.
- Metadata should remain compact and quiet.
- Korean readability should be prioritized over decorative type choices.

## Spacing System
- Keep a simple spacing scale inspired by the reference file:
  - `4`, `8`, `12`, `16`, `24`, `32`, `48`, `80`
- Use larger vertical spacing between major sections.
- Use tighter spacing inside project meta clusters.

## Status And Actions
- Status badge examples:
  - `운영 중`
  - `운영 중단`
  - `비공개`
- Action priority:
  1. design attachment if this portfolio is design-led
  2. live website if public and relevant
- Buttons should be minimal and consistent in size.

## Mobile Rules
- Preserve image-first hierarchy.
- Reduce metadata clutter.
- Clamp long role descriptions.
- Keep tap targets large enough for action links.

## Suggested Data Mapping For Build
- `title`: `서비스명`
- `platform`: `도메인`
- `businessType`: `형태`
- `status`: `운영 여부`
- `period`: `프로젝트 기간`
- `websiteUrl`: `웹사이트`
- `designUrl`: `디자인 첨부(링크 3일간 유효)`
- `summary`: `개요`
- `role`: `역할`

## Build Notes
- First version should prioritize:
  - clean HTML structure
  - reusable card component
  - filterable dataset
  - responsive layout
- Advanced case-study storytelling can be added later after the list view is stable.
