import { StorageSerializers } from "@vueuse/core"

export default async <Type>(url: string) => {
    const cached = useSessionStorage<Type>(
    url,
    null,
    {
        serializer: StorageSerializers.object,
    })
    if (!cached.value) {
        const {data, error} = await useFetch<Type>(url, {
            headers: useRequestHeaders(['cookie']),
        });

        if (error.value) {
            throw createError({
                ...error.value,
                statusMessage: `could not fetch from ${url}`
            })
        }

        cached.value = data.value as Type;
    }

    return cached
}