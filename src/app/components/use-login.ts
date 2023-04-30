import { DependencyList, useCallback, useEffect, useState } from 'react';
import { User, UserInfo } from './interfaces';

export const useLogin = (
    load: () => Promise<any>,
    deps: DependencyList = [],
    condition = true
) => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>();
    const [error, setError] = useState(undefined);

    const signInUser = useCallback(() => {
        load()
            .then((data) => {
                setUserInfo(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    useEffect(() => {
        if (condition) {
            signInUser();
        }
    }, deps);

    return [userInfo, error];
};
