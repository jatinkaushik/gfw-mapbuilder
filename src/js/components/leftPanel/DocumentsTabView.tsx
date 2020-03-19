import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getDocuments } from 'js/helpers/mapController/Documents';

import { RootState } from 'js/store';

import { AttachmentWithURLProps } from 'js/interfaces/Attachment';

import { ReactComponent as DocIcon } from 'src/images/documentIcon.svg';

interface Props {
  key: string;
  label: string;
}

const DocumentsTabView = (props: Props): JSX.Element => {
  const [allAttachments, setAllAttachments] = useState([]);
  const { activeTab, tabViewVisible } = useSelector(
    (store: RootState) => store.appState.leftPanel
  );
  const { activeFeatures, activeFeatureIndex } = useSelector(
    (store: RootState) => store.mapviewState
  );
  const tabViewIsVisible = tabViewVisible && activeTab === props.label;

  const [featureCollectionIndex] = activeFeatureIndex;

  const returnFeatureCollectionTitle = (): string => {
    if (activeFeatures[featureCollectionIndex].sublayerTitle) {
      return activeFeatures[featureCollectionIndex].sublayerTitle as string;
    } else {
      return activeFeatures[featureCollectionIndex].layerTitle;
    }
  };

  const featureCollectionTitle = activeFeatures[featureCollectionIndex]
    ? returnFeatureCollectionTitle()
    : null;

  useEffect(() => {
    const getAndSetDocuments = async (): Promise<void> => {
      const [featureCollectionIndex, featureIndex] = activeFeatureIndex;

      const specificFeature =
        activeFeatures[featureCollectionIndex].features[featureIndex];
      const { sublayerID, layerID } = activeFeatures[featureCollectionIndex];

      const urlProperties = {
        sublayerID,
        specificFeatureID: specificFeature.objectid,
        layerID
      } as any;

      const attachments = await getDocuments(urlProperties);

      if (attachments !== allAttachments) {
        setAllAttachments(attachments as any);
      }
    };

    if (tabViewIsVisible) {
      // TODO dispatch loader
      getAndSetDocuments();
    }
  }, [tabViewIsVisible]);

  const returnDocuments = (): Array<JSX.Element> | JSX.Element => {
    if (allAttachments && allAttachments.length) {
      return allAttachments.map(
        (attachment: AttachmentWithURLProps, key: number) => {
          const { url, size, name } = attachment;
          return (
            <Fragment key={key}>
              <tr>
                <td title={name} className="file-name">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </td>
                <td>{Math.round(size / 1000)} KB</td>
                <td>
                  <DocIcon height={20} width={20} fill={'#555'} />
                </td>
              </tr>
            </Fragment>
          );
        }
      );
    } else {
      return <>There are no attachments at this time.</>;
    }
  };

  return (
    <div className="documents-container">
      {tabViewIsVisible && (
        <>
          <table className="documents-table">
            <thead className="feature-collection-title">
              {featureCollectionTitle}
            </thead>
            <div className="custom-horizontal-rule" />
            {allAttachments && allAttachments.length ? (
              <thead className="table-headers">
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>PDF</th>
                </tr>
              </thead>
            ) : null}
            <tbody>{returnDocuments()}</tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DocumentsTabView;
