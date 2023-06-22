class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if (len(prices)==0) or (len(prices)==1):
            return 0

        else:
            maxProfit=0
            cheapestDay = prices[0]
            for i in range(1, len(prices)):
                if prices[i] < cheapestDay:
                    cheapestDay = prices[i]
                    continue
                if prices[i]-cheapestDay>maxProfit:
                    maxProfit =  prices[i]-cheapestDay

            return maxProfit
