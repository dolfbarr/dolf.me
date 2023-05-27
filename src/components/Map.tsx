import classNames from 'classnames'
import { LatLngTuple } from 'leaflet'
import React, { PropsWithChildren, ReactElement } from 'react'
import { LOCATION } from '../content/data'

const Map: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }): ReactElement => {
  const Placeholder = (): ReactElement => (
    <p className="flex content-center justify-center">
      Map of {LOCATION.title}.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { MapContainer, TileLayer, CircleMarker } = require('react-leaflet')

    return (
      <MapContainer
        center={LOCATION.coordinates as LatLngTuple}
        zoom={5}
        className={classNames(className)}
        zoomAnimation
        placeholder={<Placeholder />}
        scrollWheelZoom={false}>
        <TileLayer
          detectRetina
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={LOCATION.coordinates as LatLngTuple}
          radius={10}
          fillOpacity={0.25}
        />
      </MapContainer>
    )
  }

  return <Placeholder />
}

export default Map
