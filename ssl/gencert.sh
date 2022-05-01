#!/bin/bash

CURRENT_DIR=$(pwd)
SCRIPT_DIR=$(dirname $0)

echo "Generating an SSL private key to sign your certificate..."
openssl genrsa -des3 -out "$SCRIPT_DIR/server.key.pem" 1024

echo "Generating a Certificate Signing Request..."
openssl req -new -key "$SCRIPT_DIR/server.key.pem" -out "$SCRIPT_DIR/server.csr.pem"

echo "Removing passphrase from key (for nginx)..."
cp "$SCRIPT_DIR/server.key.pem" "$SCRIPT_DIR/server.key.pem.org"
openssl rsa -in "$SCRIPT_DIR/server.key.pem.org" -out "$SCRIPT_DIR/server.key.pem"
rm "$SCRIPT_DIR/server.key.pem.org"

echo "Generating certificate..."
openssl x509 -req -days 3650 -in "$SCRIPT_DIR/server.csr.pem" -signkey "$SCRIPT_DIR/server.key.pem" -out "$SCRIPT_DIR/server.crt.pem"

