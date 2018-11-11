import { aXpost } from './aXfetch.js';

const apiServer = '/api';

export function getUsersJSON() {
    return aXpost(`${apiServer}/getUsers`,{
        filter: [
            'UserId',
            'ImageURL',
            'Acronym',
            'FirstName',
            'LastName',
            'JobTitleId',
            'DepartmentId',
            'UserKey',
            'UsedDays',
            'AvailableDays',
            'EmployeeStartDate'
        ]    
    });
}

