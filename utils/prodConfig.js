/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

module.exports = {
	creds: {
		redirectUrl: 'https://willsnvision.com/token',
		clientID: '3f700195-da8a-4a32-87e2-2620a92cad20',
		clientSecret: 'bxwuLT_~rniUXPJS33804@]',
		identityMetadata: 'https://login.microsoftonline.com/48d31ece-65b2-4a6f-979d-358c6eb66388/v2.0/.well-known/openid-configuration',
		allowHttpForRedirectUrl: true, // For development only
		responseType: 'code',
		validateIssuer: false, // For development only
		responseMode: 'query',
		scope: ['offline_access', 'User.Read', 'User.ReadBasic.All', 'User.Read.All', 'User.ReadWrite', 'User.ReadWrite.All', 'Group.Read.All', 'Group.ReadWrite.All', 'Contacts.Read', 'Contacts.ReadWrite']
	}
};
