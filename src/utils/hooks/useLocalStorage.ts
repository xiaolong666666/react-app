import { useState, useEffect, useCallback, useMemo } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            const newValue = item
                ? JSON.parse(item)
                : initialValue instanceof Function
                    ? initialValue()
                    : initialValue;
            const targetValue = typeof newValue === 'object' ? JSON.stringify(newValue) : newValue;
            localStorage.setItem(key, targetValue);

            return newValue;
        } catch (error) {
            console.log(error);
            const newValue = initialValue instanceof Function
                ? initialValue()
                : initialValue;
            const targetValue = typeof newValue === 'object' ? JSON.stringify(newValue) : newValue;
            localStorage.setItem(key, targetValue);

            return newValue;
        }
    });
    const value = useMemo(() => typeof storedValue === 'object' ? JSON.stringify(storedValue) : storedValue, [storedValue]);

    const setValue = useCallback(
        (value: any) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                const targetValue = typeof valueToStore === 'object' ? JSON.stringify(valueToStore) : valueToStore;
                setStoredValue(targetValue);
                window.localStorage.setItem(key, targetValue);
            } catch (error) {
                console.log(error);
            }
        },
        [key, storedValue]
    );

    const handler = useCallback(
        (event: StorageEvent) => {
            if (event.key === key && event.newValue) {
                const newValue = typeof event.newValue === 'object' ? JSON.parse(event.newValue) : event.newValue;
                setStoredValue(newValue);
            }
        },
        [key]
    );

    useEffect(() => {
        window.addEventListener('storage', handler);

        return () => {
            window.removeEventListener('storage', handler);
        };
    }, [handler]);

    return [value, setValue] as const;
}
