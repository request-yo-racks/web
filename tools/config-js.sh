#!/bin/bash
set -euo pipefail

# Define variables.
TOPDIR=$(git rev-parse --show-toplevel)
CONFIG_JS="${TOPDIR}/src/config.js"

# Load the RYR environment variables.
source "${RYR_GLOBAL_CONFIG_DIR:="${HOME}/.config/ryr"}/ryr-env.sh"

# Create the config file if needed.
if [ ! -f "${CONFIG_JS}" ]; then
cat << EOF > "${CONFIG_JS}"
var config = {"GOOGLE_WEB_MAPS_API_KEY": "${RYR_WEB_GOOGLE_MAPS_API_KEY}"};
EOF
fi
