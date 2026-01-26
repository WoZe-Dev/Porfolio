---
title: "cybersécurité web - Apache "
subtitle: "Administration et sécurisation de serveur web"
tags: ["Apache | cybersécurité web"]
category: "cybersécurité"
published: true
publishDate: "2025-10-28T12:00:00.000Z"
---






# 🛡️ Sécurisation d'Apache

> **Objectif** : contrôler qui peut accéder à un site ou dossier Apache  
> **Méthodes étudiées** : 🔐 Basic Auth · 🏠 Restriction IP · 🏢 LDAP · 🔑 Certificat Client

---

## 1) 🔐 Authentification Basique (Basic Auth)

### 🎯 Principe
Protéger une ressource avec **identifiant + mot de passe**.  
Les identifiants sont encodés en **Base64** → utiliser **HTTPS** pour la sécurité.

### 🧪 Tester avec curl
```bash
curl --basic -u user:password https://example.com
```

### ⚙️ Configuration Apache
```apache
<Directory /var/www/nextcloud>
  AuthType Basic
  AuthName "nc_access"
  AuthBasicProvider file
  AuthUserFile "/var/www/users_list.txt"
  Require valid-user
</Directory>
```

### 👤 Création du fichier utilisateur
```bash
htpasswd -c /var/www/users_list.txt monuser
```

---

## 2) 🏠 Restriction par Adresse IP

### 🎯 Principe
Limiter l’accès à **certaines adresses IP**.

```apache
<Directory /var/www/site>
  Require ip 192.168.1.0/24
  Require ip 127.0.0.1
</Directory>
```
---
| Exemple | Effet |
|--------|-------|
| `Require ip 127.0.0.1` | Accès **seulement local** |
| `Require ip 192.168.0.0/16` | Accès **réseau interne** |

---

## 3) 🏢 Authentification LDAP

### 🎯 Principe
Utiliser l’annuaire d’entreprise (LDAP / Active Directory).

```apache
AuthBasicProvider ldap
AuthLDAPURL ldap://ldaphost/o=entreprise.lab
```

→ L’utilisateur se connecte avec ses **identifiants professionnels**.

---

## 4) 🔑 Authentification par Certificat Client (SSL)

### 🎯 Principe
L’accès est autorisé **uniquement si le client possède un certificat**.

### 🛠️ Générer un certificat client
```bash
openssl x509 -req -CA root_ca.crt -CAkey root_ca.key -in client_req.csr -out client.crt
```

### 📦 Créer un fichier importable dans le navigateur
```bash
openssl pkcs12 -export -in client.crt -inkey client.key -out client.p12
```

> `.p12` = certificat + clé → importable dans Chrome / Firefox

---

## ✅ Tableau Récapitulatif

| Méthode | Utilisation | Mots-clés à retenir |
|--------|------------|--------------------|
| **Basic Auth** | Login + mot de passe | `AuthUserFile`, `Require valid-user` |
| **IP / Host** | Restriction réseau | `Require ip` |
| **LDAP** | Comptes entreprise | `AuthBasicProvider ldap` |
| **Certificat Client** | Accès ultra sécurisé | `.crt`, `.key`, `.p12` |

---

## 🎓 À Retenir 

- `AuthType Basic` → Auth basique  
- `Require valid-user` → Tous les comptes valides autorisés  
- `Require ip` → Restriction par IP  
- `AuthBasicProvider ldap` → Auth via LDAP  
- Certificat client = **méthode la plus sécurisée**








