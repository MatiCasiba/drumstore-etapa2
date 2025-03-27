
export const peticionesHttp = async (urlMockapi, options) => {
    try {
        
        const res = await fetch(urlMockapi, options)
        if(!res.ok) throw new Error("No se pudo realizar", res.status);
        const data = await res.json()
        return data
        

    } catch (error) {
        console.error('[peticionesHttp]', error)
    }
}