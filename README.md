# Grand-Theft-Metering

A web-based action game inspired by classic top-down shooters.

## 🔧 Game Concept Summary – *HKVO Showdown*

**Genre:** Top-down, team-based multiplayer in the style of *GTA2* with retro pixel-art graphics.

**Platform:** Browser-based (HTML5 + WebSockets + Phaser or PixiJS, multiplayer via Colyseus or Socket.IO)

---

## 🎯 Core Idea

Two asymmetrical teams compete in an urban environment:

* **Installation Team (MTDL – Mounting Technicians)**
  Equip apartment buildings with heating cost allocators, cold/hot water meters, and a gateway for remote consumption reporting.
* **Tenants**
  Try to delay or prevent access, sabotage installations, or obstruct technicians.

---

## 🏘 World Design

* **Top-down pixel art city**, inspired by *GTA2* (camera cuts away roofs/walls when entering buildings).
* Technicians drive to a designated apartment building, ring the bell, and attempt to enter.
* Some tenants are controlled by NPCs, others by players.
* **Interior visibility is limited** (Fog of War); doors must be opened before players see each other.
* Each building has 3–6 apartments, stairs, and hallways.

---

## 🔧 Core Mechanics

### 👷 Installation Team (blue)

* Drive to target building and ring the doorbell.
* Navigate staircases and hallways to reach assigned apartments.
* Install devices (each takes 3–5 seconds, possibly interrupted):
  * Heating Cost Allocator
  * Cold Water Meter
  * Hot Water Meter
  * Gateway (for digital transmission)
* Tools/Inventory system
* Earn points per successful installation.

### 👤 Tenants (green/red)

* Refuse or delay door access.
* Play "argument cards": GDPR, "dog sleeping", "missing permission", etc.
* Sabotage attempts:
  * Remove batteries
  * Fake a leak or obstruction
  * "Accidentally" lock the technician in the stairwell
* Cause distractions via NPC interactions or dialogue options.
* Fog of War enables hiding and surprise actions.

---

## 🎮 Gameplay Loop

1. Game starts with teams spawning in a district.
2. Technician team receives installation orders at random apartments.
3. Tenants are spread across the same apartments or nearby.
4. Installation team attempts to enter, install, and leave.
5. Tenants disrupt or delay—each side gains or loses points.
6. Game ends after timer or after all installations succeed/fail.

---

## 🔮 Technical Implementation Suggestion

| Component     | Tech Stack                               |
| ------------- | ---------------------------------------- |
| Graphics & UI | Phaser 3 (Canvas, Tilemaps, Top-Down)    |
| Multiplayer   | Node.js + Colyseus (authoritative state) |
| UI/HUD        | Canvas or overlay via HTML/CSS           |
| NPC logic     | Simple FSMs, trigger zones               |
| Fog of War    | Tile-based visibility, per-team masking  |

---

## 🚧 Prototype Scope

* 1 building, 1 floor, 3 apartments, 1 Technician vs 1 Tenant
* Each device installation = 5s progress bar
* Tenants can interrupt by opening the door or using sabotage
* Scoreboard updates in real time


## ▶️ Running the Prototype

Open `index.html` in a web browser to try the prototype. Use the arrow keys to move the technician and press `SPACE` near a door to start an installation.
