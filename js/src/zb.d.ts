import { Exchange } from './base/Exchange.js';
export default class zb extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseBalance(response: any): import("./base/types.js").Balances;
    parseSwapBalance(response: any): import("./base/types.js").Balances;
    parseMarginBalance(response: any, marginMode: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: any;
        network: any;
        info: any;
    };
    fetchDepositAddresses(codes?: string[], params?: {}): Promise<{}>;
    fetchDepositAddress(code: any, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: any;
        network: any;
        info: any;
    }>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchCanceledOrders(symbol?: string, since?: any, limit?: number, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: any, limit?: number, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrder(order: any, market?: any): any;
    parseOrderStatus(status: any, market?: any): string;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: number;
        fee: any;
    };
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    fetchFundingRateHistory(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchFundingRate(symbol: any, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: string;
        indexPrice: string;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: any;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: string;
        indexPrice: string;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: number;
        fundingTimestamp: number;
        fundingDatetime: string;
        nextFundingRate: any;
        nextFundingTimestamp: number;
        nextFundingDatetime: string;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    fetchFundingRates(symbols?: string[], params?: {}): Promise<any>;
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchDeposits(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchPosition(symbol: any, params?: {}): Promise<{
        info: any;
        id: any;
        symbol: any;
        contracts: number;
        contractSize: any;
        entryPrice: number;
        collateral: any;
        side: string;
        unrealizedProfit: number;
        leverage: number;
        percentage: string;
        marginMode: string;
        notional: number;
        markPrice: any;
        liquidationPrice: number;
        initialMargin: number;
        initialMarginPercentage: any;
        maintenanceMargin: number;
        maintenanceMarginPercentage: any;
        marginRatio: number;
        timestamp: number;
        datetime: string;
    }>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): {
        info: any;
        id: any;
        symbol: any;
        contracts: number;
        contractSize: any;
        entryPrice: number;
        collateral: any;
        side: string;
        unrealizedProfit: number;
        leverage: number;
        percentage: string;
        marginMode: string;
        notional: number;
        markPrice: any;
        liquidationPrice: number;
        initialMargin: number;
        initialMarginPercentage: any;
        maintenanceMargin: number;
        maintenanceMarginPercentage: any;
        marginRatio: number;
        timestamp: number;
        datetime: string;
    };
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        info: any;
        timestamp: number;
        datetime: string;
        direction: any;
        account: string;
        referenceId: any;
        referenceAccount: any;
        type: string;
        currency: any;
        amount: number;
        before: number;
        after: number;
        status: any;
        fee: any;
    };
    fetchLedger(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    transfer(code: any, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    };
    modifyMarginHelper(symbol: any, amount: any, type: any, params?: {}): Promise<any>;
    parseMarginModification(data: any, market?: any): {
        info: any;
        type: string;
        amount: any;
        code: any;
        symbol: any;
        status: string;
    };
    addMargin(symbol: any, amount: any, params?: {}): Promise<any>;
    reduceMargin(symbol: any, amount: any, params?: {}): Promise<any>;
    fetchBorrowRate(code: any, params?: {}): Promise<{
        currency: any;
        rate: number;
        period: number;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    fetchBorrowRates(params?: {}): Promise<any[]>;
    setPositionMode(hedged: any, symbol?: string, params?: {}): Promise<any>;
    borrowMargin(code: any, amount: any, symbol?: string, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: any): {
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    nonce(): number;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
}