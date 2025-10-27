import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Shield, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

const Index = () => {
  // Firm Profile inputs
  const [firmSize, setFirmSize] = useState(50);
  const [avgSalary, setAvgSalary] = useState(85000);
  const [currentComplianceCost, setCurrentComplianceCost] = useState(150000);
  const [annualRevenue, setAnnualRevenue] = useState(5000000);
  const [incidentRisk, setIncidentRisk] = useState(25);
  const [auditHours, setAuditHours] = useState(500);
  const [downtimeCost, setDowntimeCost] = useState(50000);

  // Investment costs
  const annualSolutionCost = 12000;
  const implementationCost = 25000;

  const calculateROI = () => {
    // Investment Summary
    const totalFirstYearCost = annualSolutionCost + implementationCost;

    // Annual Benefits Calculations
    const finraFineAvoidance = (incidentRisk / 100) * 0.85 * 500000;
    const avgBreachCost = 5900000; // IBM 2024 average
    const breachPrevention = (incidentRisk / 100) * 0.92 * avgBreachCost;
    const staffCostReduction = (currentComplianceCost * 0.4);
    const auditTimeSavings = (auditHours * 0.5) * (avgSalary / 2080);
    const downtimePrevention = (incidentRisk / 100) * 0.99 * downtimeCost * 40;
    const revenueProtection = annualRevenue * 0.035;

    const totalAnnualBenefits = 
      finraFineAvoidance + 
      breachPrevention + 
      staffCostReduction + 
      auditTimeSavings + 
      downtimePrevention + 
      revenueProtection;

    // ROI Analysis
    const year1ROI = ((totalAnnualBenefits - totalFirstYearCost) / totalFirstYearCost) * 100;
    const paybackMonths = (totalFirstYearCost / (totalAnnualBenefits / 12));
    const year3ROI = (((totalAnnualBenefits * 3) - (totalFirstYearCost + (annualSolutionCost * 2))) / totalFirstYearCost) * 100;
    
    // 5-Year NPV calculation (simplified, 10% discount rate)
    const year1Net = totalAnnualBenefits - totalFirstYearCost;
    const yearlyNet = totalAnnualBenefits - annualSolutionCost;
    const npv5Year = year1Net + 
      (yearlyNet / 1.1) + 
      (yearlyNet / Math.pow(1.1, 2)) + 
      (yearlyNet / Math.pow(1.1, 3)) + 
      (yearlyNet / Math.pow(1.1, 4));

    return {
      // Investment Summary
      annualSolutionCost,
      implementationCost,
      totalFirstYearCost,
      
      // Annual Benefits
      finraFineAvoidance,
      breachPrevention,
      staffCostReduction,
      auditTimeSavings,
      downtimePrevention,
      revenueProtection,
      totalAnnualBenefits,
      
      // ROI Analysis
      year1ROI,
      paybackMonths,
      year3ROI,
      npv5Year
    };
  };

  const results = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Firm Profile */}
        <Card className="mb-6 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Shield className="w-5 h-5 text-primary" />
              Firm Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firmSize" className="text-foreground">Firm Size (Number of Users)</Label>
              <Input
                id="firmSize"
                type="number"
                value={firmSize}
                onChange={(e) => setFirmSize(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avgSalary" className="text-foreground">Average Employee Salary ($)</Label>
              <Input
                id="avgSalary"
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="complianceCost" className="text-foreground">Current Annual Compliance Cost ($)</Label>
              <Input
                id="complianceCost"
                type="number"
                value={currentComplianceCost}
                onChange={(e) => setCurrentComplianceCost(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-foreground">Annual Revenue ($)</Label>
              <Input
                id="revenue"
                type="number"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="incidentRisk" className="text-foreground">Incident Risk Probability (%)</Label>
              <Input
                id="incidentRisk"
                type="number"
                value={incidentRisk}
                onChange={(e) => setIncidentRisk(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="auditHours" className="text-foreground">Annual Audit Hours</Label>
              <Input
                id="auditHours"
                type="number"
                value={auditHours}
                onChange={(e) => setAuditHours(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="downtimeCost" className="text-foreground">Downtime Cost per Hour ($)</Label>
              <Input
                id="downtimeCost"
                type="number"
                value={downtimeCost}
                onChange={(e) => setDowntimeCost(Number(e.target.value))}
                className="bg-input border-border text-foreground"
              />
            </div>
          </CardContent>
        </Card>

        {/* Investment Summary */}
        <Card className="mb-6 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <DollarSign className="w-5 h-5 text-accent" />
              Investment Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Annual Solution Cost</span>
              <span className="text-foreground font-medium">${results.annualSolutionCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Implementation (Year 1)</span>
              <span className="text-foreground font-medium">${results.implementationCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-foreground font-semibold">Total First Year Cost</span>
              <span className="text-primary font-bold text-lg">${results.totalFirstYearCost.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Annual Benefits */}
        <Card className="mb-6 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TrendingUp className="w-5 h-5 text-accent" />
              Annual Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">FINRA Fine Avoidance</span>
              <span className="text-accent font-medium">${results.finraFineAvoidance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Breach Prevention</span>
              <span className="text-accent font-medium">${results.breachPrevention.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Staff Cost Reduction (40%)</span>
              <span className="text-accent font-medium">${results.staffCostReduction.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Audit Time Savings (50%)</span>
              <span className="text-accent font-medium">${results.auditTimeSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Downtime Prevention</span>
              <span className="text-accent font-medium">${results.downtimePrevention.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Revenue Protection</span>
              <span className="text-accent font-medium">${results.revenueProtection.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center pt-3">
              <span className="text-foreground font-semibold">Total Annual Benefits</span>
              <span className="text-accent font-bold text-xl">${results.totalAnnualBenefits.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
          </CardContent>
        </Card>

        {/* ROI Analysis */}
        <Card className="mb-6 border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl">ROI Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Year 1 ROI</div>
                <div className="text-3xl font-bold text-primary">
                  {results.year1ROI.toLocaleString(undefined, { maximumFractionDigits: 0 })}%
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
                <div className="text-3xl font-bold text-primary">
                  {results.paybackMonths.toFixed(1)} mo
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">3-Year ROI</div>
                <div className="text-3xl font-bold text-primary">
                  {results.year3ROI.toLocaleString(undefined, { maximumFractionDigits: 0 })}%
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">5-Year NPV</div>
                <div className="text-3xl font-bold text-primary">
                  ${results.npv5Year.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Assumptions */}
        <Card className="mb-6 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <AlertTriangle className="w-5 h-5" style={{ color: "hsl(45 93% 47%)" }} />
              Model Assumptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 92% ransomware incident reduction (proven metric)</li>
              <li>• 40% compliance cost reduction through automation</li>
              <li>• 50% audit preparation time reduction</li>
              <li>• 85% FINRA fine risk mitigation</li>
              <li>• Average breach cost: $5.9M (IBM 2024)</li>
              <li>• 99% MTTR improvement on incidents</li>
            </ul>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-primary/30 bg-primary/10">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ready to Transform Your Compliance Program?
            </h3>
            <p className="text-foreground/80 mb-4">
              Schedule a consultation with Securli to validate your custom ROI model
            </p>
            <p className="text-sm text-muted-foreground">
              20+ years cybersecurity expertise | 5,000+ professional community | Proven 92% threat reduction
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
