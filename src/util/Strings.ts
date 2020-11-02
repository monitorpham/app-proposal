import currencyFormatter from 'currency-formatter'
import moment from 'moment';

export const StringUtils = {

    currenry(raw: string | number): string {
        return currencyFormatter.format(Number(raw), { code: 'VND' });
    },

    currenryWithoutSymbol(raw: string | number): string {
        if (!Number(raw)) return ''
        const format = currencyFormatter.format(Number(raw), { code: 'VND' })
        return format.slice(0, format.length - 2)
    },

    unFormatCurrency(raw: string): string {
        return currencyFormatter.unformat(raw, { code: 'VND', decimal: '.' }).toString()
    }
}