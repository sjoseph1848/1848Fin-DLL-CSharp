using System;
using System.Collections.Generic;
using System.Text;

namespace Fin.BL.Models
{
    public class IncomeStatementDto
    {
        public string Symbol { get; set; }

        public FinancialsDto[] financials { get; set; }
    }
}
