import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { FleetRig } from "@/data/fleetData";
import { FleetImage } from "./FleetImage";

const fields: [keyof FleetRig, string][] = [
  ["rigType", "Rig Type"], ["maximumDrillDepth", "Maximum Drill Depth"], ["holeSize", "Hole Size"],
  ["drillingMethod", "Drilling Method"], ["enginePower", "Engine Power"], ["pullbackCapacity", "Pullback Capacity"],
  ["pulldownCapacity", "Pulldown Capacity"], ["rotationSpeed", "Rotation Speed"], ["drillAngle", "Drill Angle"], ["dimensions", "Dimensions"],
];

export function FleetRigModal({ rig, onClose }: { rig: FleetRig | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(rig)} onOpenChange={(open) => !open && onClose()}>
      {rig && <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <FleetImage src={rig.image} alt={rig.imageAlt} className="w-full aspect-[16/7] object-cover" />
        <div className="p-6 md:p-9">
          <DialogHeader>
            <div className="eyebrow">Fleet ID · {rig.fleetNumber}</div>
            <DialogTitle className="text-3xl mt-2">{rig.name}</DialogTitle>
            <DialogDescription>{rig.description}</DialogDescription>
          </DialogHeader>
          <dl className="mt-7 border border-border rounded-lg overflow-hidden grid md:grid-cols-2">
            {fields.map(([key, label]) => <div key={key} className="p-4 border-b border-border md:odd:border-r last:border-b-0">
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-semibold text-sm">{String(rig[key])}</dd>
            </div>)}
          </dl>
          {rig.applications.length > 0 && <div className="mt-7"><h3 className="text-lg">Operational applications</h3><ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">{rig.applications.map((a) => <li key={a}>• {a}</li>)}</ul></div>}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:sales@geofields.co.tz?subject=Equipment%20information%20request" className="btn-primary justify-center">Request Equipment Information</a>
            <a href="https://wa.me/255766775255" target="_blank" rel="noreferrer" className="btn-outline justify-center">Discuss a Drilling Project</a>
          </div>
        </div>
      </DialogContent>}
    </Dialog>
  );
}
