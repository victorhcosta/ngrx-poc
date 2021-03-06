import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IGitHubRepo, IGitHubOrg } from '../../../../src/app/models/github';

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private readonly _htpp: HttpClient) {}

	getReposByUser(user: string) {

		return this._htpp.get<IGitHubRepo[]>(`https://api.github.com/users/${user}/repos`);
	}


	getOrgsByUser(user: string) {

		return this._htpp.get<IGitHubOrg[]>(`https://api.github.com/users/${user}/orgs`);
	}

}
